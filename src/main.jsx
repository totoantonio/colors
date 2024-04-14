import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./UserContext.jsx"; // Adjust the path as necessary
import Header from "./Components/App";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer"; // Ensure the filename matches the case sensitivity
import Features from "./Components/Features";
import Products from "./Components/Products";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  const App = () => {
    const productsRef = useRef(null); // Create a ref for the Products component

    return (
      <React.StrictMode>
        <Router>
          <UserProvider>
            <Navbar />
            <Header
              scrollToProducts={() =>
                productsRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            />
            <div ref={productsRef}>
              <Products />
            </div>{" "}
            <Features />
            <Footer />
          </UserProvider>
        </Router>
      </React.StrictMode>
    );
  };

  root.render(<App />);
}
