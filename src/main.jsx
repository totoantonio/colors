import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import Stats from "./Components/Stats.jsx";
import Footer from "./Components/footer.jsx";
import Features from "./Components/Features.jsx";
import Products from "./Components/Products.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Products />
    <Features />

    <Footer />
  </React.StrictMode>
);
