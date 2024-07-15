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
  Link,
} from "@nextui-org/react";
import SwitchMode from "@/SwitchMode/SwitchMode";
import Providers from "@/Providers";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Skills",
      path: "/skills",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Contact",
      path: "/contact",
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
            <span className="font-bold text-primaryText">Jalal Ahmed</span>
          </Link>
        </NavbarBrand>

        {/* Theme switch for desktop view */}
        <NavbarItem>
          <Providers>
            <SwitchMode />
          </Providers>
        </NavbarItem>

        {menuItems.map((menuItem) => (
          <NavbarItem key={menuItem.path}>
            <Link color="foreground" href={menuItem.path}>
              {menuItem.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={menuItems.path}>
            <Link
              className="w-full"
              color={"foreground"}
              href={menuItem.path}
              size="lg"
            >
              {menuItem.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
