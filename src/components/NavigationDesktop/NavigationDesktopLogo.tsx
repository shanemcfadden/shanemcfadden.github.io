import Link from "next/link";

export const NavigationDesktopLogo = () => {
  return (
    <Link className="font-semibold" href="/">
      <div className="text-2xl">Shane McFadden</div>
      <div className="text-xl">Software Developer</div>
    </Link>
  );
};
