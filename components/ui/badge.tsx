import { cn } from "@/lib/utils";

type BadgeTone = "active" | "expiring" | "expired" | "high" | "medium" | "low";

const tones: Record<BadgeTone, string> = {
  active: "border-success/35 bg-success/10 text-success",
  expiring: "border-warning/35 bg-warning/10 text-warning",
  expired: "border-danger/35 bg-danger/10 text-danger",
  high: "border-success/35 bg-success/10 text-success",
  medium: "border-warning/35 bg-warning/10 text-warning",
  low: "border-danger/35 bg-danger/10 text-danger"
};

export function Badge({ tone, className, children }: { tone: BadgeTone; className?: string; children: React.ReactNode }) {
  return <span className={cn("inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium", tones[tone], className)}>{children}</span>;
}
