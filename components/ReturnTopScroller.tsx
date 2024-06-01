import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { headerBarStyles } from '#styles';
import { TopAngle } from '#svg';

const ReturnTopScroller = () => {
  const [pageY, setPageY] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // @ts-expect-error TO FIX
      setPageY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollLink
      to="homeArea"
      spy
      smooth
      offset={-250}
      duration={500}
      href="#home-area"
    >
      {/* Check si les espaces créé pas des soucis d'animation */}
      <div
        className={`
        ${headerBarStyles.returnTopScrollContainer}
        ${pageY && pageY > 200 ? headerBarStyles.animatedAppears : ''} 
        ${pageY && pageY <= 200 ? headerBarStyles.animatedDisappears : ''}
        `}
      >
        <TopAngle />
      </div>
    </ScrollLink>
  );
};

export default ReturnTopScroller;
