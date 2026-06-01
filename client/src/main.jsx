import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#18181b",
          color: "#fff",
          border: "1px solid #27272a",
        },
      }}
    />
    <App />
  </>
);