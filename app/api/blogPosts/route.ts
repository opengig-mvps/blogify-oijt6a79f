import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const blogPosts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        userId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Blog posts fetched successfully',
        data: blogPosts,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 },
    );
  }
}