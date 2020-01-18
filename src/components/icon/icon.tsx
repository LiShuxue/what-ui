import React from "react";
import classnames from "classnames";
import "./icon.scss";
import SVG from "./svg";

export interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
  const { name, className, style } = props;
  const iconClasses = classnames("wu-icon", `wu-icon-${name}`, className);
  const SvgIcon = SVG[`${name}`];
  return SvgIcon ? <SvgIcon className={iconClasses} style={style} /> : null;
};

export default Icon;
