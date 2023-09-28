import '../styles/global.scss';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import AOS from 'aos';

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component Component={Component} pageProps={pageProps} />;
}

export default App;
