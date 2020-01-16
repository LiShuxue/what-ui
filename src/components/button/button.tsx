import React from "react";
import classnames from "classnames";
import "./button.scss";

export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "primary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    className,
    style,
    type,
    size,
    disabled,
    loading,
    icon,
    onClick,
    children
  } = props;

  const buttonClasses = classnames("wu-button", type, size, className);

  return (
    <button
      className={buttonClasses}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "default",
  size: "medium",
  disabled: false,
  loading: false
};

export default Button;
