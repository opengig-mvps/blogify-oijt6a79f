import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { blogPostId: string } },
) {
  try {
    const blogPostId = params.blogPostId;

    const blogPost = await prisma.blogPost.findFirst({
      where: { id: blogPostId },
      select: {
        id: true,
        title: true,
        content: true,
        userId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!blogPost) {
      return NextResponse.json(
        { success: false, message: 'Blog post not found' },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Blog post fetched successfully',
        data: blogPost,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error', data: error },
      { status: 500 },
    );
  }
}