import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../db/db';
import User from '../../../../../db/models/User';

connectDB()

export async function POST(req: NextRequest) {
  try {
    const { checklist, mail } = await req.json();

    //find user with mail
    let tempUser = await User.findOne({ mail: mail })

    //check if user exists
    if (!tempUser) {
      return NextResponse.json({ status: 500, error: 'Internal Server Error' });
    }

    //update user checklist
    await User.updateOne({ mail: mail }, { checklist: checklist })
    
    return NextResponse.json({ status: 200, message: 'success' });
  } catch (error) {
    //console.log(error)
    return NextResponse.json({ status: 500, error: 'Internal Server Error' });
  }
}