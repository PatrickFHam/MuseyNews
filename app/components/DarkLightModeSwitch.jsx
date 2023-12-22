"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export function DarkLightModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    if (theme =='dark') setTheme('light');
    if (theme =='light') setTheme('dark');
  };

  useEffect(() => {
    setMounted(true)
  }, []);

  if(!mounted)
    return (
      <div>
          <Button
            isIconOnly
            isLoading
            color="default"
            spinner={
              <svg
                className="animate-spin h-5 w-5 text-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            }
          >
          </Button>
      </div>
    );

  if (theme === 'dark')
  return (
    <div>
        <Button isIconOnly color="warning" aria-label="Light Mode" onPress={() => switchTheme()}>
          <SunIcon />
        </Button>
    </div>
  );

  if (theme === 'light')
  return (
    <div>
        <Button isIconOnly color="secondary" aria-label="Light Mode" onPress={() => switchTheme()}>
          <MoonIcon />
        </Button>
    </div>
  );


};