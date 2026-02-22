import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

export default function ContractDetailPage() {
  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-danger/40 bg-danger/10 p-3 text-sm text-danger">Overdue contract detected. Immediate review recommended.</div>

      <header>
        <h1 className="font-semibold">Contract Detail</h1>
        <p className="mt-1 text-sm text-muted">Review extracted fields before saving and enabling reminders.</p>
      </header>

      <Card>
        <p className="text-sm text-muted">File: master-services-agreement.pdf · 1.4MB · Uploaded by operations@northwind.agency</p>
      </Card>

      <Card className="space-y-4">
        <Field label="Title" confidence="high"><Input defaultValue="Master Services Agreement" /></Field>
        <Field label="Start date" confidence="high"><Input type="date" defaultValue="2025-01-01" /></Field>
        <Field label="End date" confidence="low" hint="Low confidence detected. Verify against section 4.2."><Input type="date" defaultValue="2024-12-01" error /></Field>
        <Field label="Renewal date" confidence="medium"><Input type="date" defaultValue="2025-11-01" /></Field>
        <Field label="Notice period days" confidence="high"><Input type="number" defaultValue={30} min={0} /></Field>
        <Field label="Payment terms summary" confidence="medium"><Textarea defaultValue="Net 30 upon monthly invoice. Late fee applies after 15 days." /></Field>

        <p className="text-sm text-danger">Validation error: End date must be later than start date. Notice period must be 0 or greater.</p>

        <div className="flex flex-wrap gap-2">
          <Button loading>Saving</Button>
          <Button variant="secondary">Save Changes</Button>
        </div>
      </Card>

      <Card>
        <p className="text-sm text-warning">Missing extraction data for renewal exception clauses. Add manually before final approval.</p>
      </Card>

      <section>
        <p className="mb-2 text-caption">Loading state preview</p>
        <Card className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </Card>
      </section>
    </div>
  );
}

function Field({
  label,
  confidence,
  hint,
  children
}: {
  label: string;
  confidence: "high" | "medium" | "low";
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <label className="text-sm font-medium">{label}</label>
        <Badge tone={confidence}>AI {confidence}</Badge>
      </div>
      {children}
      {hint ? <p className="mt-1 text-xs text-danger">{hint}</p> : null}
    </div>
  );
}
