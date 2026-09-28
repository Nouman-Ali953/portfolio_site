import { cn } from "@/lib/utils";
const base = "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";
export const Input = ({ className, ...p }: React.ComponentProps<"input">) => <input className={cn(base, className)} {...p} />;
export const Textarea = ({ className, ...p }: React.ComponentProps<"textarea">) => <textarea className={cn(base, className)} {...p} />;
