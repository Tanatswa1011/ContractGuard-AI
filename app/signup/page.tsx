import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return <div className="flex min-h-screen items-center justify-center p-6"><Card className="w-full max-w-md"><div className="mb-6 text-center"><p className="text-xl font-semibold">ContractGuardAI</p><p className="mt-2 text-sm text-muted">Start protecting deadlines in under 3 minutes.</p></div><div className="space-y-3"><Input placeholder="Work email" /><Input placeholder="Company" /><Input placeholder="Password" type="password" /><Button className="w-full">Create account</Button><p className="text-xs text-muted">Includes encryption at rest and role-based access.</p></div></Card></div>;
}
