import React from "react";

const Header = ({ children }) => {
  return (
    <div id="header">
      {children}
      <h1>Investment Calculator</h1>
    </div>
  );
};

export default Header;
