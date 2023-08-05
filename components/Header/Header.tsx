"use client";

import React from "react";
import Logo from "../icons/Logo.svg";
import Menu from "../icons/Menu.svg";
import { IconButton } from "../IconButton";
import Link from "next/link";
import { MobileMenu } from "../MobileMenu";

export const Header = () => {
  return (
    <nav className="pt-6 px-4 flex justify-between md:justify-normal">
      <Logo />
      <MobileMenu />
      <div className="hidden md:flex w-full justify-between pl-10">
        <ul className="flex gap-8 items-center">
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
