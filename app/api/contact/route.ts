import { NextResponse } from "next/server";
import { pool, init } from "@/lib/db";
export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  const { name, email, body } = await req.json().catch(() => ({}));
  if (!name || !/^\S+@\S+\.\S+$/.test(email || "") || !body || body.length > 2000)
    return NextResponse.json({ error: "Fill in every field and use a valid email." }, { status: 400 });
  try {
    await init();
    await pool.query("INSERT INTO messages(name,email,body) VALUES($1,$2,$3)", [name, email, body]);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Message not saved. Email me directly instead." }, { status: 500 });
  }
}
