import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, password, confirmPassword } = data;

  if (!name || !email || !password || !confirmPassword) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (password !== confirmPassword) {
    return new Response(JSON.stringify({ message: "Passwords do not match" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (password.length < 6) {
    return new Response(
      JSON.stringify({
        message: "Password must be at least 6 characters long",
      }),
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
    if (await usersCollection.findOne({ email })) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const saltRounds = parseInt(process.env.SALT_ROUNDS || "10");
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    await usersCollection.insertOne({
      Name: name,
      email: email,
      password: hash,
    });
    return new Response(JSON.stringify({ message: "Signup successful" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({message:"Error in Signup"}),{
      status:520,
      headers: { "Content-Type": "application/json" },

    })
  }
}
