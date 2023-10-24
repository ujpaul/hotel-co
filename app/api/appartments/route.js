import { NextResponse } from "next/server";
import appartments from "./data.json";
export async function GET(request) {
  return NextResponse.json(appartments);
}
