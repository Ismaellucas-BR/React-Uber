import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/home/Index";
import Us from "./src/pages/Us/Index";
import Dirigir from "./src/pages/dirigir/Index";
import Header from "./src/components/Header";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem_somos" element={<Us />} />
        <Route path="/dirigir" element={<Dirigir />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
