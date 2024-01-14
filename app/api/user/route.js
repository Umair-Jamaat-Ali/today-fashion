
import prisma from "@/config/dbPrisma";
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt';


export const POST = async (req) => {
  try {
    const body = await req.json();
    console.log("body", body);

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(body?.password, 10);

    const response = await prisma.user.create({
      data: {
        firstName: body?.firstName,
        lastName: body?.lastName,
        email: body?.email,
        phoneNumber: body?.phoneNumber,
        password: hashedPassword
      },
    });

    console.log("response", response);
    return NextResponse.json({ message: "successfully posted" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "something went wrong",
      error: "Failed to create user. Please try again.",
    });
  }
};
