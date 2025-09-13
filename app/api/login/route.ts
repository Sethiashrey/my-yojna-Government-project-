import bcrypt from "bcrypt";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const data = await req.json();
  const { email, password } = data;

  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Please fill all the fields" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const client = await clientPromise;
    const MONGODB_DB = process.env.MONGODB_DB;
    const db = client.db(MONGODB_DB);
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return new Response(JSON.stringify({ message: "Login unsuccessful" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ message: "Login successful" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ message: "User Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error in Logging In" }), {
      status: 520,
      headers: { "Content-Type": "application/json" },
    });
  }
}
