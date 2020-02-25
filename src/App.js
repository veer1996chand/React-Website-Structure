import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import 'web-animations-js'
// Import style files
import "./App.css";
// Import components

import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Footer from "./components/Footer";
// External

// Properties Use
import Loader from "./components/Organisms/Loader";

const Home = React.lazy(() => import("./components/Home"));
const AboutUs = React.lazy(() => import("./components/AboutUs"));
const OurProject = React.lazy(() => import("./components/OurProject"));
const ForBusiness = React.lazy(() => import("./components/ForBusiness"));
const ContactUs = React.lazy(() => import("./components/ContactUs"));
const Media = React.lazy(() => import("./components/Media"));
const Blog = React.lazy(() => import("./components/Blog"));

const PrivacyPolicy = React.lazy(() => import("./components/PrivacyPolicy"));
const TermsOfUse = React.lazy(() => import("./components/TermsOfUse"));
const Career = React.lazy(() => import("./components/Career"));
const Razorpay = React.lazy(() => import("./components/Razorpay"));
const Success = React.lazy(() => import("./components/Success"));
const LandingOffers = React.lazy(() => import("./components/LandingOffers"));

// Extra pages
const MediaLandingPage = React.lazy(() =>
  import("./components/Organisms/MediaLandingPage")
);

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={/*<Loader />*/ <div>Loading...</div>}>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/our-products" component={OurProject} />
              <Route exact path="/for-business" component={ForBusiness} />
              <Route exact path="/contact-us" component={ContactUs} />
              <Route exact path="/media" component={Media} />
              <Route exact path="/career" component={Career} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route exact path="/terms-of-use" component={TermsOfUse} />
              <Route
                exact
                path="/MediaLandingPage/:id"
                component={MediaLandingPage}
              />
              <Route exact path="/razorpay" component={Razorpay} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/offers" component={LandingOffers} />
            </Switch>
          </main>

          {/* Footer */}
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
