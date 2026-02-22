import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

const contracts = [
  { name: "MSA - Northwind Agency", date: "2026-01-18", type: "Renewal", status: "active", risk: "low" },
  { name: "SaaS License - Atlas Ops", date: "2026-02-01", type: "Notice", status: "expiring", risk: "medium" },
  { name: "Vendor Agreement - Rapid Desk", date: "2025-11-09", type: "Termination", status: "expired", risk: "high" }
] as const;

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h1 className="heading-lg">Contracts</h1>
        <Button>Upload Contract</Button>
      </div>
      <Input placeholder="Search by contract name" className="mb-4 max-w-sm" />
      <Card className="hidden overflow-x-auto md:block p-0">
        <table className="w-full text-sm">
          <thead className="bg-panel-2 text-left text-muted">
            <tr>{["Contract Name", "Next Deadline", "Deadline Type", "Status", "Actions"].map((h) => <th key={h} className="px-4 py-3 font-medium">{h}</th>)}</tr>
          </thead>
          <tbody>
            {contracts.map((item) => (
              <tr key={item.name} className={`border-t border-border hover:bg-panel-2/70 ${item.risk === "high" ? "bg-danger/5" : ""}`}>
                <td className={`px-4 py-3 ${item.risk === "high" ? "border-l-2 border-danger" : ""}`}>{item.name}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">{item.type}</td>
                <td className="px-4 py-3"><Badge tone={item.status === "active" ? "active" : item.status === "expiring" ? "expiring" : "expired"}>{item.status === "expiring" ? "Expiring Soon" : item.status[0].toUpperCase() + item.status.slice(1)}</Badge></td>
                <td className="px-4 py-3 text-muted">⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="space-y-3 md:hidden">
        {contracts.map((item) => <Card key={item.name}><div className="flex items-start justify-between"><div><p className="font-medium">{item.name}</p><p className="mt-1 text-sm text-muted">{item.type} · {item.date}</p></div><Badge tone={item.status === "active" ? "active" : item.status === "expiring" ? "expiring" : "expired"}>{item.status}</Badge></div></Card>)}
      </div>
      <div className="mt-6 grid gap-2"><Skeleton className="h-3 w-36" /><Skeleton className="h-10" /><Skeleton className="h-10" /></div>
    </div>
  );
}
