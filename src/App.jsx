import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import Overview from "./Components/OverView";
import BusinessCapabilities from "./Components/BusinessCapabilities";
import Vission from "./Components/Vission";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import MainLayout from "./Components/MainLayout";
import Grid from "./Components/Grid";
import Footer from "./Components/Footer";
import IntroSplash from "./Components/IntroSplash";
import NavBar from "./Components/NavBar";
import PageLoader from "./Components/PageLoader";
import { defaultLocale, supportedLanguages } from "./content/defaultSiteContent";
import { useSiteContent } from "./hooks/useSiteContent";

const AboutPage = lazy(() => import("./Components/AboutPage"));
const ProductsPage = lazy(() => import("./Components/ProductsPage"));
const ContactPage = lazy(() => import("./Components/ContactPage"));

const LANGUAGE_STORAGE_KEY = "ethe-trade-language";

const getInitialLocale = () => {
  const savedLocale = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  const isSupported = supportedLanguages.some(
    (language) => language.code === savedLocale,
  );

  return isSupported ? savedLocale : defaultLocale;
};

const HomePage = ({ content }) => {
  return (
    <Grid>
      <div className="site-reveal site-reveal--delay-1">
        <Overview data={content.overview} />
      </div>
      <div className="deferred-section site-reveal site-reveal--delay-2">
        <BusinessCapabilities data={content.services} />
      </div>
      <div className="deferred-section site-reveal site-reveal--delay-3">
        <Vission data={content.vision} contact={content.contact} />
      </div>
    </Grid>
  );
};

function App() {
  const [activePage, setActivePage] = useState("home");
  const [locale, setLocale] = useState(getInitialLocale);
  const [highlightContact, setHighlightContact] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contactRef = useRef(null);
  const { content } = useSiteContent(locale);

  const activeLanguage = useMemo(
    () =>
      supportedLanguages.find((language) => language.code === locale) ||
      supportedLanguages[0],
    [locale],
  );

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = activeLanguage.dir;
  }, [activeLanguage.dir, locale]);

  useEffect(() => {
    if (activePage !== "contact" || !contactRef.current) {
      return;
    }

    contactRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    contactRef.current.focus({ preventScroll: true });
    setHighlightContact(true);

    const highlightTimer = window.setTimeout(() => {
      setHighlightContact(false);
    }, 1800);

    return () => window.clearTimeout(highlightTimer);
  }, [activePage]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    if (activePage === "about") {
      return <AboutPage data={content.about} />;
    }

    if (activePage === "products") {
      return <ProductsPage data={content.products} />;
    }

    if (activePage === "contact") {
      return (
        <ContactPage
          data={content.contact}
          contactRef={contactRef}
          highlighted={highlightContact}
        />
      );
    }

    return <HomePage content={{ ...content.home, contact: content.contact }} />;
  };

  return (
    <>
      <IntroSplash content={content.siteMeta} />
      <MainLayout dir={activeLanguage.dir}>
        <Layout>
          <div className="site-reveal">
            <Header
              content={content.siteMeta}
              activeLanguage={activeLanguage}
              languages={supportedLanguages}
              onLanguageChange={setLocale}
            />
          </div>
          <div className="site-reveal site-reveal--delay-1">
            <NavBar
              activePage={activePage}
              items={content.navigation}
              onNavigate={setActivePage}
            />
          </div>
          <Suspense fallback={<PageLoader />}>{renderPage()}</Suspense>
          <div className="site-reveal site-reveal--delay-4">
            <Footer content={content.footer} />
          </div>
        </Layout>
      </MainLayout>

      <button
        type="button"
        aria-label="Back to top"
        title="Back to top"
        onClick={scrollToTop}
        className={`scroll-top-button ${
          showScrollTop ? "scroll-top-button--visible" : ""
        }`}
      >
        <span aria-hidden="true">&uarr;</span>
      </button>
    </>
  );
}

export default App;
