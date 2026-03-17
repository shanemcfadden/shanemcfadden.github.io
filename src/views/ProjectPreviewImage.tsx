import { Anchor } from "@components/Link";

export const ProjectPreviewImage = ({
  imageHref,
  imageWebp,
  linkTo,
  projectName,
}: {
  imageHref: string;
  imageWebp: string;
  linkTo?: string;
  projectName: string;
}) => {
  return linkTo ? (
    <Anchor href={linkTo}>
      <PreviewImage
        imageHref={imageHref}
        imageWebp={imageWebp}
        projectName={projectName}
      />
    </Anchor>
  ) : (
    <PreviewImage
      imageHref={imageHref}
      imageWebp={imageWebp}
      projectName={projectName}
    />
  );
};

const PreviewImage = ({
  imageHref,
  imageWebp,
  projectName,
}: {
  imageHref: string;
  imageWebp: string;
  projectName: string;
}) => {
  return (
    <picture>
      <source />
      <source type="image/webp" srcSet={imageWebp} />
      <source type={toMimeType(imageHref)} srcSet={imageHref} />
      <img
        alt={projectName + " preview image"}
        src={imageHref}
        fetchPriority="high"
      />
    </picture>
  );
};

const toMimeType = (imageHref: string) => {
  const fileExtension = imageHref.split(".")[1];

  switch (fileExtension) {
    case "jpg":
      return "image/jpeg";
    case "png":
      return "image/png";
  }

  throw new Error("Could not identify MIME type of image file " + imageHref);
};
