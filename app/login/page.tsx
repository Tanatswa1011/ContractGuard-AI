import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <div className="mb-6 text-center">
          <p className="text-xl font-semibold">ContractGuardAI</p>
          <p className="mt-2 text-sm text-muted">Protected under EU security standards.</p>
        </div>

        <div className="space-y-3">
          <Input type="email" placeholder="Work email" />
          <Input type="password" placeholder="Password" error />
          <p className="text-xs text-danger">We could not verify your credentials. Please try again.</p>
          <Button className="w-full">Sign In</Button>
        </div>
      </Card>
    </main>
  );
}
