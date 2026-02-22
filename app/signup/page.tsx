import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <div className="mb-6 text-center">
          <p className="text-xl font-semibold">ContractGuardAI</p>
          <p className="mt-2 text-sm text-muted">Start protecting deadlines in less than 3 minutes.</p>
        </div>

        <div className="space-y-3">
          <Input placeholder="Work email" />
          <Input placeholder="Company name" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Create Account</Button>
          <p className="text-xs text-muted">Includes encryption at rest, secure reminder routing, and account-level controls.</p>
        </div>
      </Card>
    </main>
  );
}
