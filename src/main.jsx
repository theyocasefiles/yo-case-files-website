import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FormspreeProvider } from "@formspree/react";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormspreeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </FormspreeProvider>
  </React.StrictMode>
);