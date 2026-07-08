import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import WebsiteDevelopment from "./Pages/WebsiteDevelopment";
import SocialMedia from "./Pages/SocialMedia";
import VideoProduction from "./Pages/VideoProduction";
import CaseStudies from "./Pages/CaseStudies";
import CaseStudy from "./Pages/CaseStudy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/website-development"
          element={<WebsiteDevelopment />}
        />

        <Route
          path="/social-media-marketing"
          element={<SocialMedia />}
        />

        <Route
          path="/video-production"
          element={<VideoProduction />}
        />

        <Route
          path="/case-studies"
          element={<CaseStudies />}
        />

        <Route
          path="/case-study/:slug"
          element={<CaseStudy />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;