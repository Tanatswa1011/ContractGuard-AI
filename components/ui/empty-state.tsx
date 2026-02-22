import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function EmptyState({ title, description, cta }: { title: string; description: string; cta: string }) {
  return (
    <Card className="flex flex-col items-center justify-center gap-3 py-10 text-center">
      <div className="rounded-lg border border-border bg-panel-2 px-3 py-2 text-muted">🗂</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="max-w-md text-sm text-muted">{description}</p>
      <Button>{cta}</Button>
    </Card>
  );
}
