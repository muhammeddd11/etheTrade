import { useMemo } from "react";
import { getDefaultSiteContent } from "../content/defaultSiteContent";

export const useSiteContent = (locale) => {
  const content = useMemo(() => getDefaultSiteContent(locale), [locale]);

  return { content };
};
