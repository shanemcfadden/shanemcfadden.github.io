import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Project, PROJECT_METADATA } from "@static/project-metadata";
import { Heading } from "@components/Heading";
import { Link } from "@components/Link";
import { ListItem, UnorderedList } from "@components/List";
import { Paragraph } from "@components/Paragraph";
import { PageLayout } from "@components/PageLayout";
import { Margin } from "@components/Margin";
import { ProjectPreviewImage } from "@views/ProjectPreviewImage";

export default function ProjectPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout
      backToPage={{
        pageHref: `/projects#${project.slug}`,
        pageName: "Projects",
      }}
      image={project.previewImageHref}
      title={project.name}
    >
      <Paragraph>{project.description}</Paragraph>
      {project.previewImageHref && (
        <Margin>
          <div className="w-fit mx-auto">
            <ProjectPreviewImage
              imageHref={project.previewImageHref}
              imageWebp={project.previewImageWebp}
              linkTo={project.liveSite}
              projectName={project.name}
            />
          </div>
        </Margin>
      )}
      {project.tools.length > 0 && (
        <>
          <Heading level={2}>Tools Used</Heading>
          <UnorderedList>
            {project.tools.map((tool) => (
              <ListItem key={tool}>{tool}</ListItem>
            ))}
          </UnorderedList>
        </>
      )}
      <Heading level={2}>Explore the Project</Heading>
      <UnorderedList>
        <ListItem>
          <Link external href={project.liveSite}>
            Live site
          </Link>
        </ListItem>
        <ListItem>
          <Link external href={project.githubRepository}>
            Source code
          </Link>
        </ListItem>
      </UnorderedList>
    </PageLayout>
  );
}

export const getStaticPaths = (async () => {
  return {
    paths: PROJECT_METADATA.map((project) => ({
      params: { projectId: project.slug },
    })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const project = PROJECT_METADATA.find(
    ({ slug }) => slug === context.params?.projectId,
  );

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
}) satisfies GetStaticProps<{
  project: Project;
}>;
