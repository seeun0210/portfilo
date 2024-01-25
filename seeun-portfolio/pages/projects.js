import Layout from "../components/layout";
import Head from "next/head";
import ProjectItem from "@/components/projects/project-item";
import { TOKEN, DATABASE_ID } from "@/config";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <Layout>
      <div className="flex flex-col items-center min-h-screen px-5 px-24 mb-10">
        <Head>
          <title>포트폴리오 프로젝트</title>
        </Head>
        <h1 className="text-3xl font-bold sm:text-2xl">
          전체 프로젝트: {projects.results.length}
        </h1>
        <div className="grid grid-col-1 md:grid-cols-2">
          {projects.results.map((aProject) => {
            return <ProjectItem key={aProject.id} data={aProject} />;
          })}
        </div>
      </div>
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
      sorts: [
        {
          property: "title",
          direction: "ascending",
        },
      ],
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
