import Image from 'next/image';

import { DarkLightModeSwitch } from './components/DarkLightModeSwitch';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-gray-700">
      <div>
        <DarkLightModeSwitch />
      </div>
    </main>
  )
}
