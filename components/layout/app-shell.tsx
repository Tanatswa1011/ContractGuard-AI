import Link from "next/link";
import { Input } from "@/components/ui/input";

const nav = [
  { href: "/app", label: "Contracts" },
  { href: "/app/contracts/new", label: "Upload" },
  { href: "/app/settings/notifications", label: "Notifications" },
  { href: "/app/billing", label: "Billing" }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[240px_1fr]">
      <aside className="border-b border-border bg-panel p-4 md:border-b-0 md:border-r">
        <div className="mb-6 text-lg font-semibold">🛡 ContractGuardAI</div>
        <nav className="grid gap-2">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-lg px-3 py-2 text-sm text-muted hover:bg-panel-2 hover:text-text">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main>
        <header className="flex items-center justify-between border-b border-border p-4">
          <Input placeholder="Search contracts" className="max-w-xs" />
          <button className="focus-ring rounded-lg border border-border bg-panel-2 px-3 py-2 text-sm">Account ▾</button>
        </header>
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
