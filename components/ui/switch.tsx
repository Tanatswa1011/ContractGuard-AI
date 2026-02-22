import { cn } from "@/lib/utils";

export function Switch({ checked = false, className }: { checked?: boolean; className?: string }) {
  return (
    <button className={cn("focus-ring inline-flex h-6 w-11 items-center rounded-full border border-border p-0.5 transition", checked ? "bg-accent" : "bg-bg", className)}>
      <span className={cn("size-5 rounded-full bg-text transition", checked ? "translate-x-5" : "translate-x-0")} />
    </button>
  );
}
