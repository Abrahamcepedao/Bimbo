import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../db/db';
import User from '../../../../db/models/User';

connectDB()

export async function POST(req: NextRequest) {
  try {

    const { name, lastname, phone, mail, company, company_size, sector, position, org, estate, city } = await req.json();

    const user = new User({ name, lastname, phone, mail, company, company_size, sector, position, org, estate, city, createdAt: Date.now(), type: 'test' })
    console.log(user)
    await user.save()
    return NextResponse.json({ status: 200, message: 'success' });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ status: 500, error: 'Internal Server Error' });
  }
}