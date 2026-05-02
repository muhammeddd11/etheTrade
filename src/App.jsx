import Overview from "./Components/OverView"
import BusinessCapabilities from "./Components/BusinessCapabilities"
import Vission from "./Components/Vission"
import Layout from "./Components/Layout"
import Header from "./Components/Header"
import MainLayout from "./Components/MainLayout"
import Grid from "./Components/Grid"
import Footer from "./Components/Footer"
import IntroSplash from "./Components/IntroSplash"
function App() {
  return (
    <> 
    <IntroSplash />
    <MainLayout>
      <Layout>
        <div className="site-reveal">
          <Header />
        </div>
        <Grid>
          <div className="site-reveal site-reveal--delay-1">
            <Overview />
          </div>
          <div className="site-reveal site-reveal--delay-2">
            <BusinessCapabilities />
          </div>
          <div className="site-reveal site-reveal--delay-3">
            <Vission /> 
          </div>
        </Grid>
        <div className="site-reveal site-reveal--delay-4">
          <Footer />
        </div>
      </Layout>
    </MainLayout>

    </>
  )
}

export default App
