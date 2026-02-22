import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tiers = [
  { name: "Starter", price: "$19", features: ["50 contracts", "Email reminders"] },
  { name: "Pro", price: "$49", features: ["Unlimited contracts", "Telegram + Slack reminders"], popular: true },
  { name: "Scale", price: "$129", features: ["Priority support", "Team controls", "API access"] }
];

export default function PricingPage() {
  return <div className="mx-auto max-w-6xl p-6"><h1 className="heading-lg mb-6">Pricing</h1><div className="grid gap-4 md:grid-cols-3">{tiers.map((tier) => <Card key={tier.name} className={tier.popular ? "border-accent" : ""}><div className="mb-2 flex items-center justify-between"><h2 className="text-lg font-semibold">{tier.name}</h2>{tier.popular ? <Badge tone="active">Most Popular</Badge> : null}</div><p className="text-3xl font-semibold">{tier.price}<span className="text-sm text-muted">/mo</span></p><ul className="mt-4 space-y-2 text-sm text-muted">{tier.features.map((f) => <li key={f}>• {f}</li>)}</ul><Button className="mt-5 w-full">Choose {tier.name}</Button></Card>)}</div><Card className="mt-6"><h3 className="heading-md">FAQ</h3><p className="mt-2 text-sm text-muted">Can I change plans? Yes, anytime from billing settings.</p></Card></div>;
}
