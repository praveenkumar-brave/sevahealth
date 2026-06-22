import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import MainLayout from "@/layouts/MainLayout";
  
  import Home from "@/pages/Home";
  import About from "@/pages/About/About";
  import Contact from "@/pages/Contact/Contact";
  
  import IManage from "@/pages/IManage/IManage";
  
  import ResidentialCare from "@/pages/Services/ResidentialCare";
  import DayProgram from "@/pages/Services/DayProgram";
  import InHomeSupport from "@/pages/Services/InHomeSupport";
  import Rehabilitation from "@/pages/Services/Rehabilitation";
  import RespiteCare from "@/pages/Services/RespiteCare";
  
  import FAQ from "@/pages/FAQ/FAQ";
  import Support from "@/pages/Support/Support";
  
  import PrivacyPolicy from "@/pages/Privacy/PrivacyPolicy";
  import Terms from "@/pages/Terms/Terms";
  
  export default function AppRoutes() {
    return (
      <BrowserRouter>
  
        <Routes>
  
          <Route element={<MainLayout />}>
  
            <Route
              path="/"
              element={<Home />}
            />
  
            <Route
              path="/about"
              element={<About />}
            />
  
            <Route
              path="/contact"
              element={<Contact />}
            />
  
            <Route
              path="/imanage"
              element={<IManage />}
            />
  
            <Route
              path="/services/residential-care"
              element={<ResidentialCare />}
            />
  
            <Route
              path="/services/day-program"
              element={<DayProgram />}
            />
  
            <Route
              path="/services/in-home-support"
              element={<InHomeSupport />}
            />
  
            <Route
              path="/services/rehabilitation"
              element={<Rehabilitation />}
            />
  
            <Route
              path="/services/respite-care"
              element={<RespiteCare />}
            />
  
            <Route
              path="/faq"
              element={<FAQ />}
            />
  
            <Route
              path="/support"
              element={<Support />}
            />
  
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />
  
            <Route
              path="/terms"
              element={<Terms />}
            />
  
          </Route>
  
        </Routes>
  
      </BrowserRouter>
    );
  }