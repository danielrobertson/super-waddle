"use client";

import React from "react";
import Logo from "../icons/Logo.svg";
import * as Popover from "@radix-ui/react-popover";
import { IconButton } from "../IconButton";
import Menu from "../icons/Menu.svg";
import Close from "../icons/Close.svg";
import Link from "next/link";
import "./styles.css";

export const MobileMenu = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          <Menu aria-label="Menu" className="md:hidden not-sr-only" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div className="bg-white flex flex-col gap-4 p-4 rounded-md shadow-md ">
            <div className="flex justify-between">
              <Logo />
              <Popover.Close className="PopoverClose" aria-label="Close">
                <Close />
              </Popover.Close>
            </div>
            <ul className="flex flex-col gap-4 text-gray-700">
              <li>
                <Link href="#">Product</Link>
              </li>
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Marketplace</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
            <Link
              href="#"
              className="text-center mt-3 text-white bg-indigo-600 hover:bg-indigo-800 rounded-md text-base leading-6 px-4 py-3"
            >
              Start free trial
            </Link>
            <div className="leading-6 text-gray-500">
              Existing customer?{" "}
              <Link href="#" className="text-gray-900">
                Log in
              </Link>
            </div>
          </div>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
