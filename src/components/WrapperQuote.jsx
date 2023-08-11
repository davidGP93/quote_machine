import React from "react";
import Footer from "./Footer.jsx";
const wrapperQuote = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
      <Footer />
    </div>
  );
};

export default wrapperQuote;
