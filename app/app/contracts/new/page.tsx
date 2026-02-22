import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NewContractPage() {
  return (
    <div className="space-y-4">
      <h1 className="heading-lg">Upload Contract</h1>
      <Card>
        <div className="rounded-lg border border-dashed border-border bg-panel-2 p-8 text-center">
          <p className="font-medium">Drag & drop your PDF here</p>
          <p className="mt-2 text-sm text-muted">PDF only · Max 20MB</p>
          <div className="mx-auto mt-4 h-2 w-full max-w-sm rounded bg-bg"><div className="h-2 w-1/3 rounded bg-accent" /></div>
          <p className="mt-2 text-xs text-muted">Upload progress: 34%</p>
        </div>
        <Card className="mt-4 bg-panel-2 p-3">
          <p className="text-sm">service-agreement.pdf</p>
          <p className="text-xs text-muted">Uploaded · Ready for extraction</p>
        </Card>
        <p className="mt-3 text-sm text-danger">Upload failed. File exceeds 20MB limit.</p>
        <Button className="mt-3">Start Extraction</Button>
      </Card>
      <Card>
        <h2 className="heading-md">Extraction Progress</h2>
        <ol className="mt-3 space-y-2 text-sm text-muted">
          <li>1. Uploading</li><li>2. Reading contract</li><li>3. Extracting key dates</li>
        </ol>
        <p className="mt-3 text-sm">This may take up to 30 seconds.</p>
        <div className="mt-3 flex gap-2"><Button variant="secondary">Retry</Button><Button variant="ghost">Manual Entry</Button></div>
      </Card>
    </div>
  );
}
