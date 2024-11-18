// src/components/SimpleLayout.js
import React from 'react';

const SimpleLayout = ({ children }) => {
  return <div>{children}</div>; // Just render children, no Navbar or Footer
};

export default SimpleLayout;
