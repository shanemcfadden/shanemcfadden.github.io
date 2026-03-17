import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Card } from "@components/Card";
import { Link } from "@components/Link";
import { UnorderedList, ListItem } from "@components/List";
import { FlexWrap } from "@components/FlexWrap";
import { Margin } from "@components/Margin";
import { PageLayout } from "@components/PageLayout";
import { joinClassNames } from "../util";
import { SITE_DESCRIPTION } from "@static/constants";

const PAGE_TITLE = "Shane McFadden - Software Developer";
const PAGE_HEADING = "Software Developer Building Scalable, Full-Stack Systems";

export default function Page() {
  return (
    <PageLayout
      title={PAGE_TITLE}
      heading={PAGE_HEADING}
      description={SITE_DESCRIPTION}
    >
      <section>
        <Paragraph>
          I design and deliver software that scales across teams and services —
          from initial design through implementation and production deployment.
        </Paragraph>

        <Margin weight="medium">
          <UnorderedList>
            <ListItem>
              Technical leader for cross-team engineering initiatives
            </ListItem>
            <ListItem>
              Specialized in full-stack web applications built with TypeScript,
              React, Node.js, and distributed systems
            </ListItem>
            <ListItem>
              Focused on architecture, developer productivity, and building
              reliable applications
            </ListItem>
          </UnorderedList>
        </Margin>
        <Margin weight="medium">
          <FlexWrap>
            <Link href="/projects">View Projects</Link>
            <Link href="/resume">Read My Resume</Link>
            <Link href="/contact">Get in Touch</Link>
          </FlexWrap>
        </Margin>
      </section>

      <section>
        <Heading level={2}>What I Do Best</Heading>
        <div
          className={joinClassNames(
            "grid gap-6",
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          <Card>
            <Heading level={3} collapseTopMargin>
              Architecture & System Design
            </Heading>
            <Paragraph>
              Designing systems that evolve safely over time.
            </Paragraph>
            <UnorderedList>
              <ListItem>Architectural Decision Records (ADRs)</ListItem>
              <ListItem>Domain and service boundaries</ListItem>
              <ListItem>Microservice and monorepo architectures</ListItem>
            </UnorderedList>
          </Card>
          <Card>
            <Heading level={3} collapseTopMargin>
              Engineering Leadership
            </Heading>
            <Paragraph>Helping teams deliver complex systems.</Paragraph>
            <UnorderedList>
              <ListItem>Technical roadmap development</ListItem>
              <ListItem>Mentoring engineers across experience levels</ListItem>
              <ListItem>Codebase standards and engineering practices</ListItem>
              <ListItem>Cross-team coordination for large initiatives</ListItem>
            </UnorderedList>
          </Card>
          <Card>
            <Heading level={3} collapseTopMargin>
              Full-Stack TypeScript Development
            </Heading>
            <Paragraph>Delivering end-to-end features.</Paragraph>
            <UnorderedList>
              <ListItem>React / Next.js applications</ListItem>
              <ListItem>GraphQL and API design</ListItem>
              <ListItem>Event-driven services</ListItem>
              <ListItem>Distributed system integration</ListItem>
            </UnorderedList>
          </Card>
        </div>
      </section>

      <section>
        <Heading level={2}>Key Results</Heading>
        <div
          className={joinClassNames(
            "grid gap-6",
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          <Card>
            <Heading level={3} collapseTopMargin>
              Developer Productivity
            </Heading>
            <Paragraph>
              Created internal tooling that cut release management time in half
              across four teams, allowing engineers to spend more time shipping
              features.
            </Paragraph>
          </Card>
          <Card>
            <Heading level={3} collapseTopMargin>
              System Architecture
            </Heading>
            <Paragraph>
              Led consolidation of 11 microservice repositories into a single
              codebase, reducing duplicated logic and enabling faster, safer
              service iteration.
            </Paragraph>
          </Card>
          <Card>
            <Heading level={3} collapseTopMargin>
              Reliability Engineering
            </Heading>
            <Paragraph>
              Architected and executed the first zero-downtime
              expand-and-contract database migration for a domain of a
              half-dozen engineering teams.
            </Paragraph>
          </Card>
        </div>
      </section>

      <section>
        <Heading level={2}>Philosophy</Heading>
        <Paragraph>
          Good software engineering is not just about writing code. It&apos;s
          about designing systems that teams can understand, direct, and trust
          in production.
        </Paragraph>

        <Paragraph>I care deeply about:</Paragraph>
        <Margin weight="small">
          <UnorderedList>
            <ListItem>
              Fostering codebases that inspire the engineers who contribute to
              them
            </ListItem>
            <ListItem>
              Shipping minimum deliverables quickly to learn from feedback
              early, ensuring a robust final product
            </ListItem>
            <ListItem>
              Reducing developer overhead so engineers can focus on what&apos;s
              most impactful
            </ListItem>
          </UnorderedList>
        </Margin>
      </section>

      <section>
        <Margin>
          <Card>
            <Paragraph>
              If you&apos;re building complex systems and want a software
              developer who can move comfortably between architecture,
              implementation, and team leadership, I&apos;d love to connect.
            </Paragraph>
            <Link href="/contact">Get in Touch</Link>
          </Card>
        </Margin>
      </section>
    </PageLayout>
  );
}
