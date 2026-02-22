import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "focus-ring min-h-24 w-full rounded-lg border border-border bg-panel-2 px-3 py-2 text-sm text-text placeholder:text-muted disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
