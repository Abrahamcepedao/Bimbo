import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/db/db';
import User from '@/db/models/User';

connectDB()

export async function POST(req: NextRequest) {
  try {

    const { mail } = await req.json();
    const user = await User.findOne({ mail })
    //console.log(user)
    if (!user) {
      return NextResponse.json({ status: 404, error: 'User not found' });
    }

    return NextResponse.json({ status: 200, data: user });
  } catch (error) {
    //console.log(error)
    return NextResponse.json({ status: 500, error: 'Internal Server Error' });
  }
}