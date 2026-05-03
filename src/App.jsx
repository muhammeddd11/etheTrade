import { lazy, Suspense, useEffect, useRef, useState } from "react"
import Overview from "./Components/OverView"
import BusinessCapabilities from "./Components/BusinessCapabilities"
import Vission from "./Components/Vission"
import Layout from "./Components/Layout"
import Header from "./Components/Header"
import MainLayout from "./Components/MainLayout"
import Grid from "./Components/Grid"
import Footer from "./Components/Footer"
import IntroSplash from "./Components/IntroSplash"
import NavBar from "./Components/NavBar"

const AboutPage = lazy(() => import("./Components/AboutPage"))
const ProductsPage = lazy(() => import("./Components/ProductsPage"))
const ContactPage = lazy(() => import("./Components/ContactPage"))

const HomePage = () => {
  return (
    <Grid>
      <div className="site-reveal site-reveal--delay-1">
        <Overview />
      </div>
      <div className="deferred-section site-reveal site-reveal--delay-2">
        <BusinessCapabilities />
      </div>
      <div className="deferred-section site-reveal site-reveal--delay-3">
        <Vission />
      </div>
    </Grid>
  )
}

function App() {
  const [activePage, setActivePage] = useState("home")
  const [highlightContact, setHighlightContact] = useState(false)
  const contactRef = useRef(null)

  useEffect(() => {
    if (activePage !== "contact" || !contactRef.current) {
      return
    }

    contactRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    contactRef.current.focus({ preventScroll: true })
    setHighlightContact(true)

    const highlightTimer = window.setTimeout(() => {
      setHighlightContact(false)
    }, 1800)

    return () => window.clearTimeout(highlightTimer)
  }, [activePage])

  const renderPage = () => {
    if (activePage === "about") {
      return <AboutPage />
    }

    if (activePage === "products") {
      return <ProductsPage />
    }

    if (activePage === "contact") {
      return (
        <ContactPage
          contactRef={contactRef}
          highlighted={highlightContact}
        />
      )
    }

    return <HomePage />
  }

  return (
    <>
      <IntroSplash />
      <MainLayout>
        <Layout>
          <div className="site-reveal">
            <Header />
          </div>
          <div className="site-reveal site-reveal--delay-1">
            <NavBar activePage={activePage} onNavigate={setActivePage} />
          </div>
          <Suspense fallback={null}>{renderPage()}</Suspense>
          <div className="site-reveal site-reveal--delay-4">
            <Footer />
          </div>
        </Layout>
      </MainLayout>

    </>
  )
}

export default App
