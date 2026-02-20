import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/theme.css";
import "./styles/global.css";
import "./styles/effects.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/chatbot.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
