import { useCallback, useMemo } from "react";
import { useModalContext } from "@components/Modal/ModalContext";
import { SkillDetailsModal } from "./SkillDetailsModal";
import { Technology } from "@types";
import { PROJECT_METADATA } from "@static/project-metadata";
import { toProjectHref } from "@util";
import { TechnologyPill } from "../TechnologyPill";

export const SkillDetailsPill = ({ skill }: { skill: Technology }) => {
  const { openModal } = useModalContext();
  const modalId = `skill-${skill}`;

  const openSkillDetailsModal = useCallback(() => {
    openModal(modalId);
  }, [openModal, modalId]);

  const projects = useMemo(
    () =>
      PROJECT_METADATA.filter((project) =>
        project.tools.some((tool) => tool === skill),
      ).map(({ name, slug }) => ({
        name,
        href: toProjectHref(slug),
      })),
    [skill],
  );

  return (
    <>
      <SkillDetailsModal id={modalId} projects={projects} skill={skill} />
      <TechnologyPill
        onClick={projects.length ? openSkillDetailsModal : undefined}
        technology={skill}
      />
    </>
  );
};
