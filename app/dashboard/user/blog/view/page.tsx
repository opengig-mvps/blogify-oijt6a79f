"use client";

import { useState, useEffect } from "react";
import axios, { isAxiosError } from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

const BlogPostsPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchBlogPosts = async (page: number) => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/blogPosts?page=${page}`);
      setBlogPosts(res.data.data);
      setTotalPages(res.data.totalPages);
    } catch (error: any) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message ?? "Something went wrong");
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogPosts(page);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePostClick = (postId: string) => {
    router.push(`/dashboard/user/blog/view/${postId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts?.map((post: any) => (
            <Card key={post?.id} onClick={() => handlePostClick(post?.id)}>
              <CardHeader>
                <CardTitle>{post?.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post?.content.slice(0, 100)}...</p>
              </CardContent>
              <CardFooter>
                <Button variant="link">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(page - 1)}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(page + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
    </div>
  );
};

export default BlogPostsPage;