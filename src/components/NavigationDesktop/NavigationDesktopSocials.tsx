import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { Anchor } from "../Link";
import { GITHUB_HREF, LINKEDIN_HREF } from "@static/constants";

interface Social {
  href: string;
  icon: IconDefinition;
  label: string;
}

const SOCIALS: Social[] = [
  {
    href: GITHUB_HREF,
    icon: faSquareGithub,
    label: "GitHub",
  },
  {
    href: LINKEDIN_HREF,
    icon: faLinkedin,
    label: "LinkedIn",
  },
];

export const NavigationDesktopSocials = () => {
  return (
    <div className="flex justify-center gap-2 text-4xl">
      {SOCIALS.map(({ href, icon, label }) => (
        <SocialLink key={href} href={href} icon={icon} label={label} />
      ))}
    </div>
  );
};

const SocialLink = ({ href, icon, label }: Social) => (
  <Anchor href={href} aria-label={label}>
    <div className="w-8">
      <FontAwesomeIcon icon={icon} aria-hidden="true" widthAuto />
      <span className="sr-only">label</span>
    </div>
  </Anchor>
);
