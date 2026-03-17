import { Heading } from "@components/Heading";
import { FlexWrap } from "@components/FlexWrap";
import { TechnologyPill } from "@views/TechnologyPill";
import { Paragraph } from "@components/Paragraph";
import { toProjectHref } from "@util";
import { Project } from "@static/project-metadata";
import { Card } from "@components/Card";
import { Margin } from "@components/Margin";
import Link from "next/link";
import { ProjectPreviewImage } from "./ProjectPreviewImage";

export const ProjectPreview = ({ project }: { project: Project }) => {
  return (
    <Link href={toProjectHref(project.slug)}>
      <Card id={project.slug}>
        <Heading level={2}>{project.name}</Heading>
        <Paragraph>
          {<span className="line-clamp-4">{project.description}</span>}
        </Paragraph>

        <Margin>
          <div className="w-fit mx-auto">
            <ProjectPreviewImage
              imageHref={project.previewImageHref}
              imageWebp={project.previewImageWebp}
              projectName={project.name}
            />
          </div>
        </Margin>

        <Margin>
          <FlexWrap>
            {project.featuredTools.map((technology) => (
              <TechnologyPill key={technology} technology={technology} />
            ))}
          </FlexWrap>
        </Margin>
      </Card>
    </Link>
  );
};
