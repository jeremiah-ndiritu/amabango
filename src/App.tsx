import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/company/AboutPage";
import Contact from "./pages/company/ContactPage";
import ServicesLayout from "./pages/services/ServicesLayout";
import AutoCadServices from "./pages/services/service-types/AutoCadServices";
import ITServices from "./pages/services/service-types/ITServices";
import WebDevServices from "./pages/services/service-types/WebDevServices";
import ServicesIndex from "./pages/services/ServicesIndex";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />}/>
        <Route path="/contacts" element={<Contact />} />

        <Route path="/services" element={<ServicesLayout />}>
        <Route index element={<ServicesIndex />} />
        <Route path="webdev" element={<WebDevServices />} />
        <Route path="autocad" element={<AutoCadServices />} />
        <Route path="it" element={<ITServices />} />
      </Route>
      </Routes>
    </>
  )
}
