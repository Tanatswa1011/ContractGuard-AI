import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const channels = [
  { name: "Email", status: "Connected", enabled: true },
  { name: "Telegram", status: "Not Connected", enabled: false },
  { name: "Slack", status: "Not Connected", enabled: false },
  { name: "WhatsApp", status: "Premium / Coming Soon", enabled: false }
];

export default function NotificationsPage() {
  return <div><h1 className="heading-lg mb-4">Notification Settings</h1><div className="grid gap-4 md:grid-cols-2">{channels.map((c) => <Card key={c.name}><div className="mb-3 flex items-center justify-between"><h2 className="font-semibold">{c.name}</h2><span className="text-xs text-muted">{c.status}</span></div><div className="mb-3 flex items-center justify-between rounded-lg bg-panel-2 p-2 text-sm"><span>Enable channel</span><button className={`h-6 w-11 rounded-full ${c.enabled ? "bg-accent" : "bg-bg"}`}><span className={`block size-5 rounded-full bg-text transition ${c.enabled ? "translate-x-5" : "translate-x-0"}`} /></button></div><div className="flex gap-2"><Button variant="secondary">Connect</Button><Button variant="ghost">Send test message</Button></div></Card>)}</div></div>;
}
