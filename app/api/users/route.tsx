
import { NextResponse } from "next/server";

export async function GET() {
    return  NextResponse.json({ name: 'Dr Bilal', age: 20 ,city: "Karachi", country: "Pakistan"},{status: 200});
}