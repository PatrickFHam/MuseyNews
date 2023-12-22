"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export function ThemeSwitcher2() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      <Button isIconOnly color="warning" aria-label="Light Mode" onPress={() => setTheme('light')}>
        <SunIcon />
      </Button>

      <Button isIconOnly color="danger" aria-label="Dark Mode" onPress={() => setTheme('dark')}>
        <MoonIcon />
      </Button>


      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
};