"use client";

import React, { forwardRef } from "react";
import { useButton } from "react-aria";
import type { AriaButtonProps } from "@react-aria/button";
import { mergeRefs } from "react-merge-refs";
import classnames from "classnames";

interface ButtonProps extends AriaButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = forwardRef((props: ButtonProps, forwardRef) => {
  let ref = React.useRef<HTMLButtonElement>(null);
  let { buttonProps } = useButton(props, ref);
  let { children, className, variant = "primary" } = props;

  const classes = classnames(
    {
      "w-full text-white bg-indigo-500 hover:bg-indigo-800 rounded-md text-base leading-6 px-4 py-3":
        variant === "primary",
    },
    {
      "w-full text-white bg-gray-600 hover:bg-gray-800 rounded-md text-base leading-6 px-2 py-3":
        variant === "secondary",
    },
    {
      "w-full text-white text-base leading-6 px-4 py-3": variant === "tertiary",
    },
    className
  );

  return (
    <button
      className={classes}
      {...buttonProps}
      ref={mergeRefs([ref, forwardRef])}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
