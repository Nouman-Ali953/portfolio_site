import { cn } from "@/lib/utils";
export const Card = ({ className, ...p }: React.ComponentProps<"div">) => <div className={cn("rounded-2xl border border-border bg-card/70 backdrop-blur", className)} {...p} />;
export const CardContent = ({ className, ...p }: React.ComponentProps<"div">) => <div className={cn("p-6", className)} {...p} />;
