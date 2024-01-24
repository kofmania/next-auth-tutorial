import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const post = async (req: NextRequest) => {
  const body = await req.json();
  console.log("signup", "POST", body);
  // parse body
  // send request to backend
  // return response
  try {
    return NextResponse.json({ user: { ...body } });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "some error" }), {
      status: 500,
    });
  }
};

export const POST = post;
