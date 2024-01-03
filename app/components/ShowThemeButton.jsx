"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

export function ShowThemeButton() {
    const [ mounted, setMounted ] = useState(false);
    const { theme, setTheme } = useTheme();

    function setToLight() {
        setTheme('light');
    };

    function setToDark() {
        setTheme('dark');
    };

    useEffect(() => {
        setMounted(true)
      }, []);
    
    return (
        <div>
            <Button aria-label='setToLight' color='warning' onPress={() => setToLight()}>
                Set to LIGHT
            </Button>

            <Button aria-label='setToDark' color='secondary' onPress={() => setToDark()}>
                Set to DARK
            </Button>
        </div>
    )
};