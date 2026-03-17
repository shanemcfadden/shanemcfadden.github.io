import { Heading } from "@components/Heading";
import { Technology } from "@types";
import { FlexWrap } from "@components/FlexWrap";
import { SkillDetailsPill } from "./SkillDetailsPill";

export const SkillsSection = ({
  sectionHeading,
  skills,
}: {
  sectionHeading: string;
  skills: Technology[];
}) => (
  <div>
    <Heading level={2}>{sectionHeading}</Heading>
    <FlexWrap>
      {skills.map((skill) => (
        <SkillDetailsPill key={skill} skill={skill} />
      ))}
    </FlexWrap>
  </div>
);
