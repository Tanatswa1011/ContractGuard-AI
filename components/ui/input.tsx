import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "focus-ring w-full rounded-lg border border-border bg-panel-2 px-3 py-2 text-sm text-text placeholder:text-muted disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
