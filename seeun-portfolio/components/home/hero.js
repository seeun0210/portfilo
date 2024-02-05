import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-slate-300">
          "안녕하세요. 책임감 있는 서버 개발자 김세은입니다."
        </h1>
        <h2 className="mb-8 leading-relaxed text-2xl text-gray-500 dark:text-slate-400">
          새로운 기술을 배우는 것을 좋아하고, 열심히 공부하여 위기에도 차분하게
          문제를 해결합니다.
        </h2>
        <h2 className="leading-relaxed text-2xl text-gray-500 dark:text-slate-400">
          🏠 서울 중랑구
        </h2>
        <h2 className="leading-relaxed text-2xl text-gray-500 dark:text-slate-400">
          ⚒️ SKILL SET: NodeJS, NestJS, Spring, MySQL, PostgreSQL, MongoDB,
          Docker, AWS{" "}
        </h2>
        <Link href="https://github.com/seeun0210">
          <h2 className="mb-8 leading-relaxed text-2xl text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300">
            🔗 깃허브 바로가기
          </h2>
        </Link>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-transform transform hover:scale-110">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className="rounded-full overflow-hidden">
        <Image src="/my-img.JPG" alt="My Image" width={500} height={500} />
      </div>
    </>
  );
}
