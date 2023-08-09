import { NextRequest, NextResponse } from "next/server";

import User from "@/models/users.model";
import { connect } from "@/dbConfig/dbConfig";

connect();
export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const users = await User.find();
    return NextResponse.json({ data: users }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error occured while searching for users" },
      { status: 500 }
    );
  }
  return NextResponse.json({ message: "ok", status: 200 });
}
