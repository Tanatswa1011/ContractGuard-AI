"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const navItems = [
  { href: "/app", label: "Contracts" },
  { href: "/app/contracts/new", label: "Upload" },
  { href: "/app/settings/notifications", label: "Notifications" },
  { href: "/app/billing", label: "Billing" }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen md:grid md:grid-cols-[248px_1fr]">
      <aside className="border-b border-border bg-panel p-4 md:border-b-0 md:border-r md:p-5">
        <div className="mb-6 flex items-center gap-2 text-base font-semibold">
          <span className="rounded-md border border-border bg-panel-2 px-2 py-1">🛡</span>
          ContractGuardAI
        </div>
        <nav className="grid grid-cols-2 gap-2 md:grid-cols-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-lg px-3 py-2 text-sm transition",
                  active
                    ? "border border-accent/40 bg-accent/10 text-text"
                    : "border border-transparent text-muted hover:border-border hover:bg-panel-2 hover:text-text"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main>
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4 md:px-6">
          <Input placeholder="Search contracts" className="max-w-sm" />
          <button className="focus-ring rounded-lg border border-border bg-panel-2 px-3 py-2 text-sm text-muted hover:text-text">Account ▾</button>
        </header>
        <div className="page-wrap">{children}</div>
      </main>
    </div>
  );
}
