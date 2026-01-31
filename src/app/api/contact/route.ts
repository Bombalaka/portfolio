import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  let body: Partial<ContactPayload> = {};

  try {
    body = (await req.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in name, email, and message." },
      { status: 400 }
    );
  }

  // Reuse your existing public URL, but use a SERVER-ONLY key to insert safely.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Server is missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
      },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  // Your table uses a capitalized column: "Name" (not "name").
  // Postgres treats quoted identifiers as case-sensitive, so we must match it exactly.
  const { error } = await supabase.from("messages").insert([{ Name: name, email, message }]);

  if (error) {
    // Return the real error so you can learn what went wrong (RLS/table/columns/etc.).
    return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}

