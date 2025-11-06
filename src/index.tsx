import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { AuditRequest } from "./pages/AuditRequest";
import "../tailwind.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demander-audit" element={<AuditRequest />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
