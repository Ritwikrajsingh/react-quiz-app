import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./components/App";
import "./index.css";

ReactDOMClient.createRoot(
  document.getElementById("root")).render(<App />);