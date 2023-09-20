import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/db/db';
import Results from '@/db/models/Results';

connectDB()

export async function GET(req: NextRequest) {
  try {
    //check if results exists with id
    let tempResult = await Results.find({ type: 'short' })

    //check if results exists
    if (!tempResult) {
      return NextResponse.json({ status: 400, error: 'There are no results' });
    }
    //console.log(tempResult)

    return NextResponse.json({ status: 200, data: tempResult });
  } catch (error) {
    //console.log(error)
    return NextResponse.json({ status: 500, error: 'Internal Server Error' });
  }
}