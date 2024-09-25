import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Header } from "./components/header.tsx";
import { Footer } from "./components/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="max-w-5xl mx-auto h-screen flex flex-col gap-1">
      <Header />
      <App />
      <Footer />
    </main>
  </StrictMode>
);
