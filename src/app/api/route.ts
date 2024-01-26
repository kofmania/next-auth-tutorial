import { getServerSession } from "next-auth";
import { authOptions } from "../lib/nextAuth";
import { NextRequest, NextResponse } from "next/server";

const get = async (request: NextRequest) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return NextResponse.json({ id: 1 });
};

export const GET = get;
