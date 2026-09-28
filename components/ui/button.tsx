import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const v = cva("inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 cursor-pointer", {
  variants: {
    variant: { default: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30", outline: "border border-border bg-card/40 hover:bg-card hover:border-accent" },
    size: { default: "h-11 px-6", icon: "size-10" },
  }, defaultVariants: { variant: "default", size: "default" },
});
export function Button({ className, variant, size, asChild, ...p }: React.ComponentProps<"button"> & VariantProps<typeof v> & { asChild?: boolean }) {
  const C = asChild ? Slot : "button";
  return <C className={cn(v({ variant, size }), className)} {...p} />;
}
