import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressSteps } from "@/components/ui/progress-steps";

const extractionSteps = ["Uploading", "Reading contract", "Extracting key dates"];

export default function NewContractPage() {
  return (
    <div className="space-y-5">
      <header>
        <h1 className="font-semibold">Upload Contract</h1>
        <p className="mt-1 text-sm text-muted">Drop a PDF file to begin AI extraction.</p>
      </header>

      <Card>
        <div className="rounded-lg border border-dashed border-border bg-panel-2 p-8 text-center">
          <p className="font-medium">Drag and drop your PDF contract</p>
          <p className="mt-2 text-sm text-muted">PDF only · Max 20MB</p>
          <div className="mx-auto mt-4 h-2 w-full max-w-md rounded bg-bg">
            <div className="h-2 w-1/3 rounded bg-accent" />
          </div>
          <p className="mt-2 text-xs text-muted">Upload progress: 34%</p>
        </div>

        <div className="surface-muted mt-4 p-3">
          <p className="text-sm">service-agreement.pdf</p>
          <p className="mt-1 text-xs text-muted">Uploaded successfully · Ready for extraction</p>
        </div>

        <p className="mt-3 text-sm text-danger">Upload error: file exceeds 20MB. Please upload a smaller PDF.</p>

        <Button className="mt-4">Start Extraction</Button>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold">Extraction Progress</h2>
        <p className="mt-1 text-sm text-muted">This may take up to 30 seconds.</p>
        <div className="mt-4">
          <ProgressSteps steps={extractionSteps} current={1} />
        </div>
        <div className="mt-4 rounded-lg border border-danger/30 bg-danger/10 p-3 text-sm text-danger">Extraction failed. We could not parse one or more date clauses.</div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="secondary">Retry</Button>
          <Button variant="ghost">Manual Entry</Button>
        </div>
      </Card>
    </div>
  );
}
