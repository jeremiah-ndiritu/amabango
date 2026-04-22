import { Routes, Route } from "react-router-dom";

import ServicesLayout from "@/pages/services/ServicesLayout";
import ServicesIndex from "@/pages/services/ServicesIndex";
import WebDevServices from "@/pages/services/service-types/WebDevServices";
import AutoCadServices from "@/pages/services/service-types/AutoCadServices";
import ITServices from "@/pages/services/service-types/ITServices";

export default function ServicesRoutes() {
  return (
    <Routes>
      <Route element={<ServicesLayout />}>
        <Route index element={<ServicesIndex />} />
        <Route path="webdev" element={<WebDevServices />} />
        <Route path="autocad" element={<AutoCadServices />} />
        <Route path="it" element={<ITServices />} />
      </Route>
    </Routes>
  );
}
