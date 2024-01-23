import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <Layout>
      <Head>
        <title>김세은-포트폴리오</title>
      </Head>
      <h1>총 프로젝트: {projects.results.length}</h1>
      {projects.results.map((aProject) => {
        const titleProperty = aProject.properties[""]["title"];
        return (
          <div key={aProject.id}>
            <h1>
              {titleProperty ? titleProperty[0].text.content : "No Title"}
            </h1>
          </div>
        );
      })}
    </Layout>
  );
}

// 빌드타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();
  console.log(projects);

  const projectsIds = projects.results.map((aProject) => aProject.id);
  const projectsTitles = projects.results.map((aProject) => {
    const titleProperty = aProject.properties[""]["title"];
    return titleProperty ? titleProperty[0].text.content : "No Title";
  });

  console.log(`projectIds :: ${projectsIds}`);
  console.log(`projectTitle :: ${projectsTitles}`);

  return {
    props: { projects }, // projectsTitle로 수정
  };
}
