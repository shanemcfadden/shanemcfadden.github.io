import { Link } from "@components/Link";
import { ListItem, UnorderedList } from "@components/List";
import { PageLayout } from "@components/PageLayout";
import { GITHUB_HREF, LINKEDIN_HREF } from "@static/constants";

const EMAIL = ["contact", "shanemcfadden.dev"].join("@");

export default function ContactPage() {
  return (
    <PageLayout title="Contact">
      <UnorderedList>
        {CONTACT_INFORMATION.map(({ displayString, href, platform }) => (
          <ListItem key={href}>
            <span className="font-bold">{platform}</span>:{" "}
            <Link external href={href}>
              {displayString}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </PageLayout>
  );
}

const stripScheme = (url: string) => url.split("//")[1];

const CONTACT_INFORMATION: {
  displayString: string;
  href: string;
  platform: string;
}[] = [
  {
    displayString: EMAIL,
    href: "mailto:" + EMAIL,
    platform: "Email",
  },
  {
    displayString: stripScheme(GITHUB_HREF),
    href: GITHUB_HREF,
    platform: "GitHub",
  },
  {
    displayString: stripScheme(LINKEDIN_HREF),
    href: LINKEDIN_HREF,
    platform: "LinkedIn",
  },
];
