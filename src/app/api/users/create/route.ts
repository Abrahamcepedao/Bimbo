import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../db/db';
import User from '../../../../db/models/User';

connectDB()

export async function POST(req: NextRequest) {
  try {

    const { name, lastname, phone, mail, company, company_size, sector, position, org, estate, city, createdAt, type, checklist } = await req.json();
    //console.log(name, lastname, phone, mail, company, company_size, sector, position, org, estate, city, createdAt, type, checklist)
    const user = new User({ name, lastname, phone, mail, company, company_size, sector, position, org, estate, city, createdAt, type, checklist })
    //console.log(user)
    await user.save()
    return NextResponse.json({ status: 200, message: 'success' });
  } catch (error) {
    //console.log(error)
    return NextResponse.json({ status: 500, error: 'Internal Server Error' });
  }
}