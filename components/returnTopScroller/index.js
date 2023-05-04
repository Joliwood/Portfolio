import React, { useState, useEffect } from "react";
import styles from "../../styles/headerBar.module.scss";
import TopAngle from "../svg/topAngle";
import { Link as ScrollLink } from "react-scroll";

function ReturnTopScroller() {
  const [pageY, setPageY] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setPageY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollLink
      to="homeArea"
      spy={true}
      smooth={true}
      offset={-250}
      duration={500}
      href="#home-area"
    >
      <div
        className={`${styles.returnTopScrollContainer} ${
          pageY > 200 ? styles.animatedAppears : ""
        } ${pageY <= 200 ? styles.animatedDisappears : ""}`}
      >
        <TopAngle />
      </div>
    </ScrollLink>
  );
}

export default ReturnTopScroller;
