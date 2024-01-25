import Link from "next/link";
import Image from "next/image";
import DarkModeToggleButton from "./dark-mode-toggle-button";
export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image
                src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271210/noticon/sageach1qrmmyfufwli1.gif"
                width={30}
                height={30}
              />
              <span className="ml-3 text-xl dark:text-white">Seen's Dev</span>
            </div>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <div className="mr-5 hover:text-gray-900 dark:hover:text-white">
                Home
              </div>
            </Link>
            <Link href="/projects">
              <div className="mr-5 hover:text-gray-900 dark:hover:text-white">
                Projects
              </div>
            </Link>
            <Link href="/contact">
              <div className="mr-5 hover:text-gray-900 dark:hover:text-white">
                Contact
              </div>
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
