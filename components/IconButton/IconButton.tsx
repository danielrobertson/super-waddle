"use client";

import React from "react";
import { useButton } from "react-aria";
import type { AriaButtonProps } from "@react-aria/button";
import classNames from "classnames";

interface ButtonProps extends AriaButtonProps {
  className?: string;
}

export const IconButton = (props: ButtonProps) => {
  let ref = React.useRef<HTMLButtonElement>(null);
  let { buttonProps } = useButton(props, ref);
  let { children, className } = props;

  const classes = classNames("not-sr-only", className);

  return (
    <button className={classes} {...buttonProps} ref={ref}>
      {children}
    </button>
  );
};
