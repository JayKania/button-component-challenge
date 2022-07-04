import React from "react";
import styled from "styled-components";

const Button = ({
  text,
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
}) => {
  let classes = "";
  switch (variant) {
    case "outline":
      classes += " btn-outline";
      break;
    case "text":
      classes += " btn-text";
      break;
    default:
      classes += " btn-default";
      break;
  }

  switch (disableShadow) {
    case true:
      classes += " btn-disable-shadow";
      break;
    default:
      break;
  }

  switch (disabled) {
    case true:
      classes += " btn-disabled";
      break;
    default:
      break;
  }

  switch (size) {
    case "sm":
      classes += " btn-sm";
      break;
    case "md":
      classes += " btn-md";
      break;
    case "lg":
      classes += " btn-lg";
      break;
    default:
      classes += " btn-md";
  }

  switch (color) {
    case "primary":
      classes += " btn-clr-primary";
      break;
    case "secondary":
      classes += " btn-clr-secondary";
      break;
    case "danger":
      classes += " btn-clr-danger";
      break;
    default:
      classes += " btn-clr-default";
      break;
  }
  return (
    <StyledButton className={`btn ${classes}`} disabled={disabled}>
      {startIcon && <i className="material-icons md-18">add_shopping_cart</i>}
      {text}
      {endIcon && <i className="material-icons md-18">add_shopping_cart</i>}
    </StyledButton>
  );
};

Button.defaultProps = {
  text: "default",
  variant: "default",
  disableShadow: false,
  disabled: false,
  startIcon: "",
  endIcon: "",
  size: "md",
  color: "default",
};

const StyledButton = styled.button`
  width: fit-content;
  padding: 8px 16px;
  font-size: 14px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  text-transform: capitalize;
  border: none;
  border-radius: 6px;
  transition: background-color 250ms ease, box-shadow 250ms ease;
  word-break: break-word;
  display: flex;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }
  i {
    margin: 0 3px;
  }

  &.btn-default {
    background-color: #e0e0e0;
    box-shadow: 0px 2px 3px 0 rgba(51, 51, 51, 0.2);
    :hover {
      background-color: #aeaeae;
    }
    :active {
      box-shadow: none;
    }
  }

  &.btn-outline {
    background-color: white;
    color: #3d5afe;
    border: 1px solid #3d5afe;
    :hover {
      background-color: rgba(41, 98, 255, 0.1);
    }
  }

  &.btn-text {
    background-color: white;
    color: #3d5afe;
    :hover {
      background-color: rgba(41, 98, 255, 0.1);
    }
  }

  &.btn-disable-shadow {
    box-shadow: none;
  }

  &.btn-disabled {
    pointer-events: none;
    color: #9e9e9e;
    box-shadow: none;
  }

  &.btn-sm {
    padding: 6px 11px;
  }
  &.btn-md {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  &.btn-lg {
    padding: 11px 20px;
  }

  &.btn-clr-primary {
    background-color: #2962ff;
    color: white;
    :hover {
      background-color: #0039cb;
    }
  }

  &.btn-clr-secondary {
    background-color: #455a64;
    color: white;
    :hover {
      background-color: #1c313a;
    }
  }
  &.btn-clr-danger {
    background-color: #d32f2f;
    color: white;
    :hover {
      background-color: #9a0007;
    }
  }
`;

export default Button;
