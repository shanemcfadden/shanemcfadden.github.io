import { Heading } from "./Heading";
import { PageHead } from "./PageHead";
import { PropsWithChildren } from "react";
import { Link } from "./Link";
import { Margin } from "./Margin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { SITE_NAME } from "@static/constants";

export const PageLayout = ({
  backToPage,
  children,
  description,
  heading,
  image,
  title,
}: PropsWithChildren<{
  backToPage?: {
    pageHref: string;
    pageName: string;
  };
  description?: string;
  heading?: string;
  image?: string;
  title: string;
}>) => {
  const pageTitle = title.includes(SITE_NAME)
    ? title
    : `${title} - ${SITE_NAME}`;

  return (
    <div>
      <PageHead title={pageTitle} description={description} image={image} />
      {backToPage && (
        <Margin>
          <Link href={backToPage.pageHref}>
            <div className="flex gap-2">
              <div className="w-2">
                <FontAwesomeIcon icon={faChevronLeft} widthAuto />
              </div>
              <div>Back to {backToPage.pageName}</div>
            </div>
          </Link>
        </Margin>
      )}
      <Heading level={1}>{heading ?? title}</Heading>
      {children}
    </div>
  );
};
