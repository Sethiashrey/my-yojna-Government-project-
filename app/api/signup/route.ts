import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

interface User {
  name: string;
  email: string;
  password: string;
}

// Temporary storage (resets when server restarts)
let users: User[] = [];

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists. Please log in." },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    users.push({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ message: "Server error." }, { status: 500 });
  }
}
