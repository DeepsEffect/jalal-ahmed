"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!theme) {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  if (!mounted) {
    return null;
  }
  const isDarkTheme = theme === "dark" || (!theme && resolvedTheme === "dark");

  return (
    <Button
      isIconOnly
      size="sm"
      onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
      aria-label="Toggle Theme"
    >
      {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};

export default ThemeSwitch;
