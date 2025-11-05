import { useState, useEffect, useCallback } from 'react';

export const Lang = {
  EN: 'en',
  CS: 'cs',
} as const;

const LangQueryParam = 'lang';

export type LangProp = (typeof Lang)[keyof typeof Lang];

const NEXT_LANG: Record<LangProp, LangProp> = {
  [Lang.EN]: Lang.CS,
  [Lang.CS]: Lang.EN,
};

const getLangFromSearch = (search: string, defaultLang: LangProp): LangProp => {
  const param = new URLSearchParams(search).get(LangQueryParam);

  return param === Lang.CS || param === Lang.EN
    ? (param as LangProp)
    : defaultLang;
};

export const useLangToggleState = (
  initialLang: LangProp,
  location: Location,
) => {
  const [lang, setLang] = useState<LangProp>(() =>
    getLangFromSearch(location.search, initialLang),
  );

  // Sync state when URL changes (e.g., back/forward navigation)
  useEffect(() => {
    setLang(getLangFromSearch(location.search, initialLang));
  }, [location.search, initialLang]);

  const toggleLang = useCallback(() => {
    const newLang = NEXT_LANG[lang];
    const url =
      newLang === Lang.CS
        ? `${location.pathname}?${LangQueryParam}=${Lang.CS}`
        : location.pathname;
    // Save current scroll position before navigation
    const scrollPos = typeof window !== 'undefined' ? window.scrollY : 0;

    if (typeof window !== 'undefined') {
      // Update URL without triggering scroll via history.replaceState
      window.history.replaceState(null, '', url);
      // Immediately update the lang state to trigger re-render
      setLang(newLang);
      // Restore scroll position
      window.scrollTo(0, scrollPos);
    }
  }, [lang, location.pathname]);

  return { lang, toggleLang };
};
