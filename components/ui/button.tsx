import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "destructive";

export function Button({
  className,
  variant = "primary",
  loading,
  disabled,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; loading?: boolean }) {
  const base = "focus-ring inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition disabled:cursor-not-allowed";
  const variants: Record<Variant, string> = {
    primary: "bg-accent text-bg hover:brightness-110 active:brightness-95 disabled:bg-accent/40",
    secondary: "bg-panel-2 text-text border border-border hover:bg-panel disabled:text-muted",
    ghost: "bg-transparent text-muted hover:bg-panel-2 hover:text-text",
    destructive: "bg-danger/90 text-text hover:bg-danger active:bg-danger/80"
  };

  return (
    <button className={cn(base, variants[variant], className)} disabled={disabled || loading} {...props}>
      {loading ? <span className="mr-2 size-4 animate-spin rounded-full border-2 border-bg/40 border-t-bg" /> : null}
      {children}
    </button>
  );
}
