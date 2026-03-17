import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_URL, SITE_DESCRIPTION } from "@static/constants";

const DEFAULT_IMAGE = "/images/site-preview.png";

export const PageHead = ({
  description = SITE_DESCRIPTION,
  image = DEFAULT_IMAGE,
  title,
  url,
}: {
  description?: string;
  image?: string;
  title: string;
  url?: string;
}) => {
  const router = useRouter();
  const pageUrl = url ?? `${SITE_URL}${router.asPath}`;
  const imageUrl = `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
    </Head>
  );
};
