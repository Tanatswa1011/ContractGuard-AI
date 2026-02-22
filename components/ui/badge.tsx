import { cn } from "@/lib/utils";

type BadgeTone = "active" | "expiring" | "expired" | "high" | "medium" | "low";

const map: Record<BadgeTone, string> = {
  active: "text-success bg-success/10 border-success/30",
  expiring: "text-warning bg-warning/10 border-warning/30",
  expired: "text-danger bg-danger/10 border-danger/30",
  high: "text-success bg-success/10 border-success/30",
  medium: "text-warning bg-warning/10 border-warning/30",
  low: "text-danger bg-danger/10 border-danger/30"
};

export function Badge({ tone, className, children }: { tone: BadgeTone; className?: string; children: React.ReactNode }) {
  return <span className={cn("inline-flex rounded-md border px-2 py-1 text-xs font-medium", map[tone], className)}>{children}</span>;
}
