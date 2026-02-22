import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function BillingPage() {
  return <div className="space-y-4"><h1 className="heading-lg">Billing</h1><Card><p className="text-sm text-muted">Current plan: Pro</p><div className="mt-3 flex gap-2"><Button>Upgrade Plan</Button><Button variant="secondary">Open Stripe Portal</Button></div></Card><Card><h2 className="heading-md">Invoice History</h2><p className="mt-2 text-sm text-muted">No invoices yet. Your upcoming billing cycle starts on the 1st of next month.</p></Card></div>;
}
