import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="mx-auto max-w-6xl p-6 md:p-10">
      <header className="mb-16 flex items-center justify-between">
        <div className="text-lg font-semibold">ContractGuardAI</div>
        <div className="flex gap-3">
          <Link href="/login"><Button variant="ghost">Log in</Button></Link>
          <Link href="/signup"><Button>Start Free Trial</Button></Link>
        </div>
      </header>
      <section className="mb-16">
        <h1 className="heading-xl max-w-2xl">Never Miss a Contract Deadline Again.</h1>
        <p className="mt-4 max-w-2xl text-base text-muted">AI-powered contract extraction and intelligent reminders built for security-conscious businesses.</p>
        <div className="mt-6 flex gap-3">
          <Button>Start Free Trial</Button>
          <Button variant="secondary">See How It Works</Button>
        </div>
      </section>
      <section className="mb-12 grid gap-4 md:grid-cols-3">
        {["Upload", "Extract", "Monitor"].map((s, i) => (
          <Card key={s}><p className="caption">Step {i + 1}</p><h3 className="heading-md mt-2">{s}</h3><p className="mt-2 text-sm text-muted">{s === "Upload" ? "Drop a PDF contract up to 20MB." : s === "Extract" ? "AI extracts key dates and confidence signals." : "Track obligations with deadline reminders."}</p></Card>
        ))}
      </section>
      <section className="mb-12 surface p-6 text-sm text-muted">Trusted by agencies, founders, and legal-light teams. Security and auditability come first.</section>
      <footer className="border-t border-border pt-6 text-sm text-muted">© {new Date().getFullYear()} ContractGuardAI</footer>
    </div>
  );
}
