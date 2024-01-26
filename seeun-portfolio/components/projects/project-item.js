import Image from "next/image";

export default function ProjectItem(data) {
  const projectItem = data.data;

  const Title = projectItem.properties[""]["title"][0].text.content;
  const skillSet =
    projectItem.properties["사용한 기술 스택 및 라이브러리"].multi_select;
  const skills = skillSet.map((aSkill) => aSkill.name);
  const gitHubURL = projectItem.properties["Github"].url;
  const imageURL = projectItem.cover.external.url;
  const projectURL = projectItem.properties["배포링크"]?.url;
  const projectDetailInfo = projectItem.public_url;
  const myRole =
    projectItem.properties["My Role"]["rich_text"][0]?.text.content;

  return (
    <div className="project-card">
      <div className="mb-3">
        <Image
          src={imageURL}
          width={100}
          height={100}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <h1 className="font-bold text-xl mh-3">{Title}</h1>
      <div className="py-3">
        <h2>{myRole}</h2>
      </div>
      <div className="flex flex-wrap mb-3">
        {skillSet.map((aSkill) => (
          <div
            key={aSkill.id}
            className="p-2 m-1 bg-sky-200 dark:bg-sky-700 rounded-md text-xs"
          >
            {aSkill.name}
          </div>
        ))}
      </div>
      <div>
        <a
          href={gitHubURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline"
        >
          🔗 깃허브 바로가기
        </a>
      </div>
      {projectURL && (
        <div>
          <a
            href={projectURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline"
          >
            🔗 {projectURL}
          </a>
        </div>
      )}
      <div>
        <a
          href={projectDetailInfo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline"
        >
          🔗 프로젝트 상세 내용보기
        </a>
      </div>
    </div>
  );
}
