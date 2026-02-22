import { cn } from "@/lib/utils";

export function ProgressSteps({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, index) => {
        const isActive = index === current;
        const isDone = index < current;
        return (
          <li key={step} className="flex items-center gap-3 text-sm">
            <span className={cn("inline-flex size-6 items-center justify-center rounded-full border text-xs", isDone ? "border-success bg-success/10 text-success" : isActive ? "border-accent bg-accent/10 text-accent" : "border-border bg-panel-2 text-muted")}>{index + 1}</span>
            <span className={cn(isActive ? "text-text" : "text-muted")}>{step}</span>
          </li>
        );
      })}
    </ol>
  );
}
