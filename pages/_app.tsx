import "aos/dist/aos.css";
import React, { type JSX, useEffect } from "react";
import AOS from "aos";
import { type AppProps } from "next/app";

import "../styles/global.scss";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component Component={Component} pageProps={pageProps} />;
};

export default App;
