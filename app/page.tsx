'use client' ;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, User, Edit3, Eye } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Create and Share Your Blogs
            </h1>
            <p className="max-w-[600px] mx-auto text-lg md:text-xl mb-8">
              Join our community and start creating your own blogs. Read and engage with blogs from other users.
            </p>
            <Button className="inline-flex items-center bg-white text-black px-8 py-3 rounded-md shadow-md hover:bg-gray-200">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Features
            </h2>
            <p className="max-w-[900px] mx-auto text-lg md:text-xl mb-8">
              Discover the amazing features that make our blog platform unique.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-r from-blue-400 to-purple-500 text-white">
                <CardHeader>
                  <Edit3 className="h-12 w-12 mx-auto mb-4" />
                  <CardTitle>Create Blogs</CardTitle>
                  <CardDescription>Write and publish your own blogs.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gradient-to-r from-green-400 to-teal-500 text-white">
                <CardHeader>
                  <Eye className="h-12 w-12 mx-auto mb-4" />
                  <CardTitle>View Blogs</CardTitle>
                  <CardDescription>Read blogs from other users.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                <CardHeader>
                  <User className="h-12 w-12 mx-auto mb-4" />
                  <CardTitle>Engage</CardTitle>
                  <CardDescription>Like, comment, and share blogs.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] mx-auto text-lg md:text-xl mb-8">
              Hear from our satisfied users about their experience with our blog platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/100x100.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs text-gray-400">Blogger</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    "This platform has revolutionized the way I share my thoughts and ideas. The community is amazing!"
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/100x100.png" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">Sarah Miller</p>
                      <p className="text-xs text-gray-400">Writer</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    "I love how easy it is to create and share blogs. The interface is user-friendly and intuitive."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/100x100.png" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">Michael Johnson</p>
                      <p className="text-xs text-gray-400">Content Creator</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    "The best platform for bloggers! The community is supportive and the features are top-notch."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Get Started Today
            </h2>
            <p className="max-w-[900px] mx-auto text-lg md:text-xl mb-8">
              Join our community and start creating your own blogs. It's free and easy to get started.
            </p>
            <Button className="inline-flex items-center bg-black text-white px-8 py-3 rounded-md shadow-md hover:bg-gray-800">
              Join Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Product</h3>
            <a href="#" className="hover:underline">Features</a>
            <a href="#" className="hover:underline">Integrations</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Security</a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <a href="#" className="hover:underline">Documentation</a>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Community</a>
            <a href="#" className="hover:underline">Templates</a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;