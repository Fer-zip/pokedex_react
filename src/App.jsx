import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Main from "./main";
import { PokemonProvider } from "./context/PokemonContext"; // 👈 nuevo

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokemonProvider>
      <Main />
    </PokemonProvider>
  </StrictMode>
);
