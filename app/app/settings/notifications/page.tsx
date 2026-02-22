import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const channels = [
  { name: "Email", status: "Connected", enabled: true, helper: "Primary channel for deadline reminders." },
  { name: "Telegram", status: "Not Connected", enabled: false, helper: "Use for fast team alerts." },
  { name: "Slack", status: "Not Connected", enabled: false, helper: "Push updates to legal-ops channels." },
  { name: "WhatsApp", status: "Premium / Coming Soon", enabled: false, helper: "Available on premium plans." }
] as const;

export default function NotificationsPage() {
  return (
    <div className="space-y-5">
      <header>
        <h1 className="font-semibold">Notification Settings</h1>
        <p className="mt-1 text-sm text-muted">Configure channels for reminders and renewal warnings.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {channels.map((channel) => (
          <Card key={channel.name}>
            <div className="mb-3 flex items-center justify-between gap-2">
              <h2 className="font-semibold">{channel.name}</h2>
              <span className="text-xs text-muted">{channel.status}</span>
            </div>

            <p className="mb-3 text-sm text-muted">{channel.helper}</p>

            <div className="surface-muted mb-3 flex items-center justify-between p-2 text-sm">
              <span>Enable channel</span>
              <Switch checked={channel.enabled} />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="secondary">Connect</Button>
              <Button variant="ghost">Send Test Message</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
