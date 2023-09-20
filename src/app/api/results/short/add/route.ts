import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/db/db';
import Results from '@/db/models/Results';

connectDB()

export async function POST(req: NextRequest) {
  try {
    const { id, mail, type, company_size, sector, createdAt, results } = await req.json();

    //check if results exists with id
    let tempResult = await Results.findOne({ id: id })

    //check if results exists
    if (tempResult) {
      return NextResponse.json({ status: 400, error: 'Results already created' });
    }

    //console.log(id, mail, type, company_size, sector, createdAt, results)
    const result = new Results({id, mail, type, company_size, sector, createdAt, results })
    //console.log(result)
    await result.save()
    return NextResponse.json({ status: 200, message: 'success' });
  } catch (error) {
    //console.log(error)
    return NextResponse.json({ status: 500, error: 'Internal Server Error' });
  }
}