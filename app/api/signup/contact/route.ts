import { NextResponse } from "next/server";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

// Temporary storage (will reset on server restart)
let messages: ContactMessage[] = [];

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate data
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Create new message
    const newMessage: ContactMessage = {
      id: messages.length + 1,
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    // Save to temporary memory
    messages.push(newMessage);

    return NextResponse.json({
      success: true,
      message: "Your message has been received!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Optional: GET all messages (for admin dashboard later)
export async function GET() {
  return NextResponse.json({
    success: true,
    messages,
  });
}
