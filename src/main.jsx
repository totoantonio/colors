import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./UserContext.jsx"; // Adjust the path as necessary
import App from "./Components/App";
import Navbar from "./Components/Navbar";
import Stats from "./Components/Stats";
import Footer from "./Components/footer"; // Ensure the filename matches the case sensitivity
import Features from "./Components/Features";
import Products from "./Components/Products";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <UserProvider>
          <Navbar />
          <App />
          <Products />
          <Features />
          <Stats />
          <Footer />
        </UserProvider>
      </Router>
    </React.StrictMode>
  );
}
