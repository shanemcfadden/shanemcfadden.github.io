import { PROJECT_METADATA } from "@static/project-metadata";
import { PageLayout } from "@components/PageLayout";
import { Margin } from "@components/Margin";
import { ProjectPreview } from "@views/ProjectPreview";

export default function ProjectsPage() {
  return (
    <PageLayout title="Projects">
      {PROJECT_METADATA.map((project) => (
        <Margin key={project.slug}>
          <ProjectPreview project={project} />
        </Margin>
      ))}
    </PageLayout>
  );
}
