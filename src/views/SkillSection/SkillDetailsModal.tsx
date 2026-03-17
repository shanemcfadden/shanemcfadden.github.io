import { Heading } from "@components/Heading";
import { Modal } from "@components/Modal";
import { ListItem, UnorderedList } from "@components/List";
import { Link } from "@components/Link";
import { Margin } from "@components/Margin";

export const SkillDetailsModal = ({
  id,
  skill,
  projects,
}: {
  id: string;
  skill: string;
  projects: {
    name: string;
    href: string;
  }[];
}) => (
  <Modal id={id}>
    <div>
      <Heading level={2}>{skill}</Heading>
      <Margin>
        <Heading level={3}>
          Used in the Following Project{projects.length === 1 ? "" : "s"}:
        </Heading>
        <UnorderedList>
          {projects.map(({ name, href }) => (
            <ListItem key={href}>
              <Link href={href}>{name}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Margin>
    </div>
  </Modal>
);
