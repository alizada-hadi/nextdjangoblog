import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div className="max-w-4xl m-auto">{children}</div>
    </div>
  );
};

export default Layout;
