import { cookies } from "next/headers";

export async function POST() {
  (await cookies()).set("auth-token", "", {
    httpOnly: true,
    expires: new Date(0), 
    path: "/",
  });
  
  return new Response(JSON.stringify({ message: "Logged out successfully" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}