import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link href="/">
            <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white">
              <span className="ml-3 text-xl">김세은 포트폴리오</span>
            </div>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2020 Tailblocks —
            <a
              href="https://github.com/seeun0210"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @seeun0210
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <div className="flex">
              <div className="mr-3">
                <Link href="https://github.com/seeun0210">
                  <div className="dark:bg-white inline-block rounded-full overflow-hidden transition-transform transform hover:scale-110">
                    <Image
                      className="dark:bg-white"
                      src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972215/noticon/vgvbhxae6jrvqpcnu0vb.png"
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
              </div>

              <div>
                <Link href="https://seeun0210.tistory.com">
                  <div className="dark:bg-white inline-block rounded-full overflow-hidden transition-transform transform hover:scale-110">
                    <Image
                      className="dark:bg-white"
                      src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605926847/noticon/ku5wj788ubjwba7pecrw.png"
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </span>
        </div>
      </footer>
    </div>
  );
}
