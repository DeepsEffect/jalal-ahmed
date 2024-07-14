"use client";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

const SwitchMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <Switch
       isSelected={theme === "dark"}
       onValueChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      // defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    >
      Dark mode
    </Switch>
    </div>
  );
};

export default SwitchMode;
