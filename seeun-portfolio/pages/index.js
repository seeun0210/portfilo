import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>김세은 포트폴리오</title>
        <meta name="description" content="오늘도 최선을!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">홈입니다</h1>
    </Layout>
  );
}
