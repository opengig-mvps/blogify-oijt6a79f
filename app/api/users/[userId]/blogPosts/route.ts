import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type BlogPostRequestBody = {
  title: string;
  content: string;
};

export async function POST(
  request: Request,
  { params }: { params: { userId: string } },
) {
  try {
    const userId = params.userId;

    const body: BlogPostRequestBody = await request.json();
    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: 'Title and content are required' },
        { status: 400 },
      );
    }

    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 },
      );
    }

    const blogPost = await prisma.blogPost.create({
      data: {
        title: String(title),
        content: String(content),
        userId: String(userId),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Blog post created successfully',
        data: {
          id: blogPost.id,
          title: blogPost.title,
          content: blogPost.content,
          userId: blogPost.userId,
          createdAt: blogPost.createdAt.toISOString(),
          updatedAt: blogPost.updatedAt.toISOString(),
        },
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error', data: error },
      { status: 500 },
    );
  }
}