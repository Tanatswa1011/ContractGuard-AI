import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContractDetailPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-danger/40 bg-danger/10 p-3 text-sm text-danger">This contract is overdue and requires immediate action.</div>
      <h1 className="heading-lg">Contract Detail</h1>
      <Card><p className="text-sm text-muted">File: master-services-agreement.pdf · 1.4MB</p></Card>
      <Card className="space-y-4">
        <Field label="Title" badge="high"><Input defaultValue="Master Services Agreement" /></Field>
        <Field label="Start date" badge="high"><Input type="date" defaultValue="2025-01-01" /></Field>
        <Field label="End date" badge="low" hint="Low confidence. Verify against section 4.2."><Input type="date" defaultValue="2024-12-01" className="border-danger" /></Field>
        <Field label="Renewal date" badge="medium"><Input type="date" defaultValue="2025-11-01" /></Field>
        <Field label="Notice period days" badge="high"><Input type="number" min={0} defaultValue={30} /></Field>
        <Field label="Payment terms summary" badge="medium"><Textarea defaultValue="Net 30 upon monthly invoice, late fee after 15 days." /></Field>
        <p className="text-sm text-danger">Validation: End date must be later than start date. Notice period must be 0 or greater.</p>
        <div className="flex gap-2"><Button loading>Saving</Button><Button variant="secondary">Save</Button></div>
      </Card>
      <Card><p className="text-sm text-warning">Could not extract renewal terms. Use manual entry to complete missing fields.</p></Card>
    </div>
  );
}

function Field({ label, badge, hint, children }: { label: string; badge: "high" | "medium" | "low"; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2"><label className="text-sm font-medium">{label}</label><Badge tone={badge}>AI {badge}</Badge></div>
      {children}
      {hint ? <p className="mt-1 text-xs text-danger">{hint}</p> : null}
    </div>
  );
}
