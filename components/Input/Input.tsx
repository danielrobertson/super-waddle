"use client";

import React from "react";
import type { AriaTextFieldProps } from "react-aria";
import { useTextField } from "react-aria";

export const Input = (props: AriaTextFieldProps) => {
  let { label } = props;
  let ref = React.useRef(null);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div className="w-full flex flex-col">
      <label {...labelProps}>{label}</label>
      <input
        className="w-full text-gray-500 text-base placeholder:text-gray-500 placeholder:text-base py-3 px-4 rounded-md"
        {...inputProps}
        ref={ref}
      />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 30 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};
