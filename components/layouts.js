import React, { Component } from "react";
import Footer from "./footer";
import Menubar from "./menubar";
import Header from "./header";
import Header2 from "./header2";
import Head from "next/head";
import { useRouter } from "next/router";
import about from "../pages/about";
import services from "../pages/services";

export default function Layouts({ children }) {
  const router = useRouter();
  const showHeader = router.asPath === "/" ? true : false;
  const showHeader2 = router.asPath === "/about" ? true : false;
  const showHeader3 = router.asPath === "/contact" ? true : false;
  const showHeader4 = router.asPath === "/services" ? true : false;

  return (
    <div>
      <Head>
        <title>Bloom Marine Management </title>
        <meta name="description" content="Bloom Marine company" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <Menubar />
      {showHeader && <Header />}
      {showHeader2 && <Header2 />}
      {showHeader3 && <Header2 />}
      {showHeader4 && <Header2 />}

      {children}
      <Footer />
    </div>
  );
}
