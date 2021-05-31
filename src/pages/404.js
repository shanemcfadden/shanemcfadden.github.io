import { useEffect } from "react";
import { navigate } from "@reach/router";

const NotFoundPage = () => {
  useEffect(() => {
    navigate("https://shanemcfadden.dev/");
  }, []);
  return null;
};

export default NotFoundPage;
