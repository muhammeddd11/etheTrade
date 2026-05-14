import { useEffect, useState } from "react";
import { getDefaultSiteContent } from "../content/defaultSiteContent";
import { subscribeToSiteContent } from "../firebase/siteContentService";

export const useSiteContent = (locale) => {
  const [state, setState] = useState({
    content: null,
    error: null,
    isLoading: true,
    locale,
  });

  useEffect(() => {
    const unsubscribe = subscribeToSiteContent(
      locale,
      (nextContent) => {
        setState({
          content: nextContent,
          error: null,
          isLoading: false,
          locale,
        });
      },
      (contentError) => {
        setState({
          content: getDefaultSiteContent(locale),
          error: contentError,
          isLoading: false,
          locale,
        });
      },
    );

    return unsubscribe;
  }, [locale]);

  const hasLoadedActiveLocale = state.locale === locale;

  return {
    content: hasLoadedActiveLocale ? state.content : null,
    error: hasLoadedActiveLocale ? state.error : null,
    isLoading: !hasLoadedActiveLocale || state.isLoading,
  };
};
