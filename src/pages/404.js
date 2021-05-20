import { useEffect } from "react";
import { navigate } from "@reach/router";

const NotFoundPage = () => {
  useEffect(() => {
    navigate("https://shanemcfadden.github.io/");
  }, []);
  return null;
};

export default NotFoundPage;
