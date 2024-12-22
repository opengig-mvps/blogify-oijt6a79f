import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type BlogPostRequestBody = {
  title: string;
  content: string;
};

export async function PUT(
  request: Request,
  { params }: { params: { userId: string; blogPostId: string } },
) {
  try {
    const userId = params.userId;
    const blogPostId = params.blogPostId;

    const body: BlogPostRequestBody = await request.json();

    const { title, content } = body;
    if (!title || !content) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields',
        },
        { status: 400 },
      );
    }

    const updatedBlogPost = await prisma.blogPost.updateMany({
      where: {
        id: blogPostId,
        userId: userId,
      },
      data: {
        title: title,
        content: content,
        updatedAt: new Date(),
      },
    });

    if (updatedBlogPost.count === 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Blog post not found or not updated',
        },
        { status: 404 },
      );
    }

    const blogPost = await prisma.blogPost.findFirst({
      where: {
        id: blogPostId,
        userId: userId,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Blog post updated successfully',
        data: {
          id: blogPost?.id,
          title: blogPost?.title,
          content: blogPost?.content,
          userId: blogPost?.userId,
          createdAt: blogPost?.createdAt.toISOString(),
          updatedAt: blogPost?.updatedAt.toISOString(),
        },
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error', data: error },
      { status: 500 },
    );
  }
}