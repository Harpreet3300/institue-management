import { NextResponse } from 'next/server';
import dbConnect from '@/src/lib/DBconnection';
import Review from '@/src/models/review';

export async function GET() {
  try {
    await dbConnect();
    const reviews = await Review.find().sort({ createdAt: -1 });
    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}