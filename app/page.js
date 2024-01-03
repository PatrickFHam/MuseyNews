import { Navbar, NavbarContent, Text } from "@nextui-org/react";
import { DarkLightModeSwitch } from "./components/DarkLightModeSwitch";
import { AcmeLogo } from "./components/icons/AcmeLogo";

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-gray-700">
      <div>
        <Navbar>
          <Navbar.Brand>
            <AcmeLogo />
            <Text b color="inherit" >
              Musey News
            </Text>
          </Navbar.Brand>
          <Navbar.Link
          href="/"
          isActive={router.asPath == "/" ? "true" : "false"}
          >
            Front Gate
        </Navbar.Link>
          <Navbar.Content
            enableCursorHighlight
            activeColor="primary"
            variant="underline"
          >

          </Navbar.Content>
          <Navbar.Content>
            <DarkLightModeSwitch />
          </Navbar.Content>
        </Navbar>
        
      </div>
    </main>
  )
};
