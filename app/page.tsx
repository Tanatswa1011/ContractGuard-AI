import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Upload",
    body: "Upload your contract PDF securely in seconds."
  },
  {
    title: "Extract",
    body: "AI identifies key dates, notice windows, and obligations with confidence scores."
  },
  {
    title: "Monitor",
    body: "Track deadlines continuously and trigger reminders across your channels."
  }
];

export default function LandingPage() {
  return (
    <div className="page-wrap max-w-6xl">
      <header className="mb-14 flex items-center justify-between">
        <div className="text-lg font-semibold">ContractGuardAI</div>
        <div className="flex items-center gap-3">
          <Link href="/login"><Button variant="ghost">Log In</Button></Link>
          <Link href="/signup"><Button>Start Free Trial</Button></Link>
        </div>
      </header>

      <section className="mb-14">
        <h1 className="max-w-3xl font-semibold">Never Miss a Contract Deadline Again.</h1>
        <p className="mt-4 max-w-2xl text-base text-muted">AI-powered contract extraction and intelligent reminders designed for serious teams that need reliable visibility into obligations.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button>Start Free Trial</Button>
          <Button variant="secondary">See How It Works</Button>
        </div>
      </section>

      <section className="mb-14 grid gap-4 md:grid-cols-3">
        {steps.map((step, idx) => (
          <Card key={step.title}>
            <p className="text-caption">Step {idx + 1}</p>
            <h3 className="mt-2 font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.body}</p>
          </Card>
        ))}
      </section>

      <section className="mb-10 surface p-6">
        <h2 className="text-lg font-semibold">Built for security-first operators</h2>
        <p className="mt-2 text-sm text-muted">Trusted by startup founders, agencies, and SMB owners managing high-stakes client and vendor agreements.</p>
      </section>

      <footer className="border-t border-border pt-6 text-sm text-muted">© {new Date().getFullYear()} ContractGuardAI. All rights reserved.</footer>
    </div>
  );
}
