
import { NextResponse } from "next/server";
import { user } from "./db";

export  function GET() {
    const data=user;
    console.log(data);
    return NextResponse.json(data);
}
