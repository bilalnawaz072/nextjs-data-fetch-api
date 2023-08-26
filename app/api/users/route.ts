import { NextResponse } from "next/server";
import { user } from "./db";

export function GET() {
    //export default does not work in this context
  const data = user;
  console.log(data);
  return NextResponse.json(data);
}
