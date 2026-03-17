import { Link } from "@components/Link";
import { InlineFrame } from "@components/InlineFrame";
import { Margin } from "@components/Margin";
import { PageLayout } from "@components/PageLayout";

const RESUME_STATIC_PATH = "/documents/resume.pdf";

export default function ResumePage() {
  return (
    <PageLayout title="Resume">
      <Margin>
        <div className="flex justify-between">
          <Link download="Shane-McFadden-resume.pdf" href={RESUME_STATIC_PATH}>
            Download PDF
          </Link>
          <Link external href={RESUME_STATIC_PATH}>
            Open PDF
          </Link>
        </div>
      </Margin>
      <div className="p-4 bg-background-subtle">
        <InlineFrame src={RESUME_STATIC_PATH} title="resume" />
      </div>
    </PageLayout>
  );
}
