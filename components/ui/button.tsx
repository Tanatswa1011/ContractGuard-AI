import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  loading?: boolean;
};

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-bg hover:brightness-110 active:brightness-95 disabled:bg-accent/40",
  secondary: "border border-border bg-panel-2 text-text hover:bg-panel",
  ghost: "bg-transparent text-muted hover:bg-panel-2 hover:text-text",
  destructive: "bg-danger text-text hover:bg-danger/90 active:bg-danger/80"
};

export function Button({ className, variant = "primary", disabled, loading, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "focus-ring inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60",
        buttonStyles[variant],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className="size-4 animate-spin rounded-full border-2 border-bg/35 border-t-bg" aria-hidden /> : null}
      <span>{children}</span>
    </button>
  );
}
