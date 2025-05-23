import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainIndex from "./pages/index/MainIndex";
import MainJohto from "./pages/regiones/MainJohto";
import MainSinnoh from "./pages/regiones/MainSinnoh";
import MainBusquedas from "./pages/index/MainBusquedas";

function Main() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route index element={<MainIndex />} />
          <Route path="/" element={<MainIndex />} />
          <Route path="/johto" element={<MainJohto />} />
          <Route path="/sinnoh" element={<MainSinnoh />} />
          <Route path="/busqueda" element={<MainBusquedas />} />
        </Routes>
      </main>
    </Router>
  );
}

export default Main;
