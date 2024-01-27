import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/nextAuth";
import { NextRequest, NextResponse } from "next/server";

const get = async (req: NextRequest) => {
  // ref https://next-auth.js.org/configuration/nextjs#in-app-router
  const session = await getServerSession(authOptions);
  console.log(session);

  return NextResponse.json({ session });
};

export const GET = get;
