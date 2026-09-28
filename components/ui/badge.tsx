import { cn } from "@/lib/utils";
export function Badge({ className, ...p }: React.ComponentProps<"span">) {
  return <span className={cn("inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground", className)} {...p} />;
}
