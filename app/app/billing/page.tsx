import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function BillingPage() {
  return (
    <div className="space-y-5">
      <header>
        <h1 className="font-semibold">Billing</h1>
        <p className="mt-1 text-sm text-muted">Manage plan, payment portal access, and invoice history.</p>
      </header>

      <Card>
        <h2 className="text-lg font-semibold">Current Plan</h2>
        <p className="mt-2 text-sm text-muted">You are currently on the Pro plan with monthly billing.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button>Upgrade Plan</Button>
          <Button variant="secondary">Open Stripe Portal</Button>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold">Invoice History</h2>
        <p className="mt-2 text-sm text-muted">No invoices yet. Your next billing cycle starts on the 1st of next month.</p>
      </Card>
    </div>
  );
}
