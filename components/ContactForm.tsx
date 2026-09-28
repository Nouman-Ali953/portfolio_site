"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
export default function ContactForm() {
  const [s, setS] = useState("idle");
  async function send(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; setS("sending");
    const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
    if (r.ok) { setS("done"); form.reset(); } else setS((await r.json()).error);
  }
  const L = "grid gap-1.5 text-sm text-muted-foreground";
  return (<form onSubmit={send} className="grid gap-4">
    <label className={L}>Name<Input name="name" required /></label>
    <label className={L}>Email<Input name="email" type="email" required /></label>
    <label className={L}>Message<Textarea name="body" rows={5} maxLength={2000} required /></label>
    <Button disabled={s === "sending"} className="justify-self-start">{s === "sending" ? "Sending…" : "Send message"}</Button>
    <p role="status" className="min-h-6 text-sm text-primary">{s === "done" ? "Message sent. I'll reply by email." : !["idle", "sending"].includes(s) ? s : ""}</p>
  </form>);
}
