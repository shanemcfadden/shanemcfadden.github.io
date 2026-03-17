import { Heading } from "@components/Heading";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import Head from "next/head";
import { SITE_NAME } from "@static/constants";

const PAGE_TITLE = `Page Not Found - ${SITE_NAME}`;

export default function PageNotFound() {
  return (
    <div>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta property="og:title" content={PAGE_TITLE} />
      </Head>
      <Heading level={1}>Page Not Found</Heading>
      <Paragraph>
        Go to <Link href="/">Home Page</Link>.
      </Paragraph>
    </div>
  );
}
