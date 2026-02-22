import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

const contracts = [
  { name: "MSA — Northwind Agency", nextDeadline: "2026-01-18", deadlineType: "Renewal", status: "active", risk: "low" },
  { name: "SaaS License — Atlas Ops", nextDeadline: "2026-02-01", deadlineType: "Notice", status: "expiring", risk: "medium" },
  { name: "Vendor Agreement — Rapid Desk", nextDeadline: "2025-11-09", deadlineType: "Termination", status: "expired", risk: "high" }
] as const;

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-semibold">Contracts</h1>
          <p className="mt-1 text-sm text-muted">Monitor obligations, renewal windows, and critical notice periods.</p>
        </div>
        <Button>Upload Contract</Button>
      </header>

      <Input placeholder="Search contracts" className="max-w-sm" />

      <Card className="hidden overflow-hidden p-0 md:block">
        <table className="w-full text-sm">
          <thead className="bg-panel-2 text-left text-muted">
            <tr>
              {[
                "Contract Name",
                "Next Deadline",
                "Deadline Type",
                "Status Badge",
                "Actions"
              ].map((head) => (
                <th key={head} className="px-4 py-3 font-medium">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contracts.map((row) => (
              <tr key={row.name} className={`border-t border-border hover:bg-panel-2/60 ${row.risk === "high" ? "bg-danger/5" : ""}`}>
                <td className={`px-4 py-3 ${row.risk === "high" ? "border-l-2 border-danger" : ""}`}>{row.name}</td>
                <td className="px-4 py-3">{row.nextDeadline}</td>
                <td className="px-4 py-3">{row.deadlineType}</td>
                <td className="px-4 py-3">
                  <Badge tone={row.status === "active" ? "active" : row.status === "expiring" ? "expiring" : "expired"}>
                    {row.status === "expiring" ? "Expiring Soon" : row.status[0].toUpperCase() + row.status.slice(1)}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-muted">⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <div className="grid gap-3 md:hidden">
        {contracts.map((row) => (
          <Card key={row.name} className={row.risk === "high" ? "border-danger/40" : ""}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{row.name}</p>
                <p className="mt-1 text-sm text-muted">{row.deadlineType} · {row.nextDeadline}</p>
              </div>
              <Badge tone={row.status === "active" ? "active" : row.status === "expiring" ? "expiring" : "expired"}>
                {row.status === "expiring" ? "Expiring Soon" : row.status}
              </Badge>
            </div>
          </Card>
        ))}
      </div>

      <section className="grid gap-2">
        <p className="text-caption">Loading state preview</p>
        <Card className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </Card>
      </section>

      <section>
        <p className="mb-2 text-caption">Empty state preview</p>
        <EmptyState
          title="No contracts found"
          description="Upload your first agreement to start extraction and deadline monitoring."
          cta="Upload Contract"
        />
      </section>
    </div>
  );
}
