"use client";

import React from "react";
import Logo from "../icons/Logo.svg";
import Menu from "../icons/Menu.svg";
import { IconButton } from "../IconButton";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="pt-6 px-4 flex justify-between md:justify-normal">
      <Logo />
      <IconButton aria-label="Menu" className="md:hidden">
        <Menu className="not-sr-only" />
      </IconButton>
      <div className="hidden md:flex w-full justify-between pl-10">
        <ul className="flex gap-8 items-center">
          <Link href="#">Product</Link>
          <Link href="#">Features</Link>
          <Link href="#">Marketplace</Link>
          <Link href="#">Company</Link>
        </ul>
        <div className="flex">
          <Link href="#" className="text-white px-4 py-2 leading-6">
            Log in
          </Link>
          <Link
            href="#"
            className="text-white bg-gray-600 px-4 py-2 rounded-md leading-6"
          >
            Start free trial
          </Link>
        </div>
      </div>
    </nav>
  );
};
