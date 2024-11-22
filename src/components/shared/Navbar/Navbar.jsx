"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import SwitchMode from "@/SwitchMode/SwitchMode";
import Providers from "@/Providers";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import logo from "../../../assets/images/logo.png";
import Image from "next/image";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      title: "About",
      path: "about",
    },
    {
      title: "Skills",
      path: "skills",
    },
    {
      title: "Projects",
      path: "projects",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  return (
    <Navbar
      className="fixed top-0 w-full z-10 "
      isBordered={true}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 gap-2" justify="center">
        {/* Theme switch for mobile view */}
        <NavbarItem>
          <Providers>
            <SwitchMode />
          </Providers>
        </NavbarItem>
        <NavbarBrand>
          {/* logo  */}
          <Link href="/">
            <Image src={logo} width={35} height={35} alt="logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand className="gap-2">
          {/* logo */}
          <Link href="/">
            <Image src={logo} width={35} height={35} alt="logo" />
          </Link>
        </NavbarBrand>

        {/* Theme switch for desktop view */}
        <NavbarItem>
          <Providers>
            <SwitchMode />
          </Providers>
        </NavbarItem>

        {menuItems.map((menuItem) => (
          <NavbarItem
            className="cursor-pointer hover:opacity-80"
            key={menuItem.path}
          >
            <ScrollLink
              className="w-full h-full"
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              {menuItem.title}
            </ScrollLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className=" text-center ">
        {menuItems.map((menuItem) => (
          <NavbarMenuItem key={menuItem.path}>
            <ScrollLink
              className="w-full text-2xl"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              {menuItem.title}
            </ScrollLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
