import { Technology } from "@types";
import { SkillsSection } from "@views/SkillSection";
import { PageLayout } from "@components/PageLayout";

export default function SkillsPage() {
  return (
    <PageLayout title="Skills">
      {SKILLS_SECTIONS.map(({ sectionHeading, skills }) => (
        <SkillsSection
          key={sectionHeading}
          sectionHeading={sectionHeading}
          skills={skills}
        />
      ))}
    </PageLayout>
  );
}

const SKILLS_SECTIONS: {
  sectionHeading: string;
  skills: Technology[];
}[] = [
  {
    sectionHeading: "Languages",
    skills: [Technology.TypeScript, Technology.JavaScript, Technology.Bash],
  },
  {
    sectionHeading: "Frontend",
    skills: [
      Technology.React,
      Technology.Gatsby,
      Technology.NextJS,
      Technology.Tailwind,
      Technology.Vite,
    ],
  },
  {
    sectionHeading: "Backend",
    skills: [
      Technology.NestJS,
      Technology.NodeJS,
      Technology.GraphQL,
      Technology.ApolloFederation,
      Technology.Kafka,
    ],
  },
  {
    sectionHeading: "Cloud/DevOps",
    skills: [
      Technology.CICD,
      Technology.GithubActions,
      Technology.Docker,
      Technology.Kubernetes,
      Technology.Helm,
    ],
  },
  {
    sectionHeading: "Databases",
    skills: [
      Technology.SqlServer,
      Technology.Cosmos,
      Technology.Firebase,
      Technology.PostGreSQL,
    ],
  },
  {
    sectionHeading: "Testing",
    skills: [
      Technology.Jest,
      Technology.Cypress,
      Technology.Vitest,
      Technology.FastCheck,
    ],
  },
];
