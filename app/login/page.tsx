import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return <div className="flex min-h-screen items-center justify-center p-6"><Card className="w-full max-w-md"><div className="mb-6 text-center"><p className="text-xl font-semibold">ContractGuardAI</p><p className="mt-2 text-sm text-muted">Protected under EU security standards.</p></div><div className="space-y-3"><Input placeholder="Email" type="email" /><Input placeholder="Password" type="password" /><p className="text-xs text-danger">Invalid email or password.</p><Button className="w-full">Sign in</Button></div></Card></div>;
}
