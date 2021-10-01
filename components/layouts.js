import React from "react";
import Footer from "./footer";
import Menubar from "./menubar";
import Header from "./header";

export default function layouts({ children }) {
  return (
    <div>
      <Menubar />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
