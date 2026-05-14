import { useEffect, useState } from "react";
import { getDefaultSiteContent } from "../content/defaultSiteContent";
import { subscribeToSiteContent } from "../firebase/siteContentService";

export const useSiteContent = (locale) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const unsubscribe = subscribeToSiteContent(
      locale,
      (nextContent) => {
        setContent(nextContent);
        setIsLoading(false);
      },
      (contentError) => {
        setError(contentError);
        setContent(getDefaultSiteContent(locale));
        setIsLoading(false);
      },
    );

    return unsubscribe;
  }, [locale]);

  return { content, isLoading, error };
};
