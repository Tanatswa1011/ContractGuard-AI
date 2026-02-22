import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  { name: "Starter", price: "$19", features: ["50 active contracts", "Email reminders", "Single workspace"] },
  { name: "Pro", price: "$49", features: ["Unlimited contracts", "Slack + Telegram reminders", "Priority extraction"], popular: true },
  { name: "Scale", price: "$129", features: ["Multi-user controls", "Audit exports", "Priority support"] }
];

export default function PricingPage() {
  return (
    <div className="page-wrap max-w-6xl">
      <h1 className="font-semibold">Pricing</h1>
      <p className="mt-2 text-sm text-muted">Choose a plan that matches your contract volume and reminder channels.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.popular ? "border-accent/45" : ""}>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              {plan.popular ? <Badge tone="active">Most Popular</Badge> : null}
            </div>
            <p className="text-3xl font-semibold">{plan.price}<span className="text-sm text-muted">/month</span></p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {plan.features.map((feature) => <li key={feature}>• {feature}</li>)}
            </ul>
            <Button className="mt-6 w-full">Choose {plan.name}</Button>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <h3 className="font-semibold">FAQ</h3>
        <p className="mt-2 text-sm text-muted">Can I upgrade later? Yes — you can change plans anytime from the billing page.</p>
      </Card>
    </div>
  );
}
