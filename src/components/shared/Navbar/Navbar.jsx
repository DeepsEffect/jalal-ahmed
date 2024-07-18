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
            <span className="font-bold text-inherit text-primaryText">
              Jalal Ahmed
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand className="gap-2">
          {/* logo */}
          <Link href="/">
            <span className="font-bold text-primaryText text-lg">
              Jalal Ahmed
            </span>
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
              offset={-70}
              duration={500}
            >
              {menuItem.title}
            </ScrollLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((menuItem) => (
          <NavbarMenuItem key={menuItem.path}>
            <ScrollLink
              className="w-full "
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
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
