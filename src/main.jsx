import React from "react";
import ReactDOM from "react-dom/client";



import "./styles/globals.scss";

import AppRoutes from "./routes/AppRoutes";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
);