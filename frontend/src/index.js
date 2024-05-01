import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { SocketContextProvider } from "./Context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);