import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const dbName=process.env.MONGODB_DB;
  const db = client.db(dbName); 
  const schemes = await db.collection("schemes").find({}).toArray();
  return NextResponse.json(schemes);
}

export async function POST(req: Request) {
  const client = await clientPromise;
  const dbName=process.env.MONGODB_DB;
  const db = client.db(dbName);

  const body = await req.json();
  const result = await db.collection("schemes").insertMany(body.schemes);

  return NextResponse.json({ inserted: result.insertedCount });
}
