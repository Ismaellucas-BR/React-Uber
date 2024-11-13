import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/home/Index";
import Us from "./src/pages/Us/Index";
import Dirigir from "./src/pages/dirigir/Index";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import GettingStarted from "./src/pages/getting-started/index";
import Solutions from "./src/pages/solution";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem_somos" element={<Us />} />
        <Route path="/dirigir" element={<Dirigir />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default RoutesApp;
