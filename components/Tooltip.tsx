import React, { type JSX, type ReactNode } from "react";

import { tooltipsStyles } from "#styles";

type TooltipProps = {
  children: ReactNode;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
};

const Tooltip = ({
  children,
  text,
  position = "bottom",
  className = "",
}: TooltipProps): JSX.Element => {
  const tooltipPositionClass = `${tooltipsStyles.tooltip} ${
    tooltipsStyles[
      `tooltip${position.charAt(0).toUpperCase() + position.slice(1)}`
    ]
  }`;

  return (
    <div className={`${tooltipsStyles.tooltipContainer} ${className}`}>
      {children}
      <div className={tooltipPositionClass}>{text}</div>
    </div>
  );
};

export default Tooltip;
