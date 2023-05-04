import "../styles/global.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
};

export default App;
