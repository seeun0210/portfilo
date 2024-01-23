import Image from "next/image";

export default function ProjectItem(data) {
  const projectItem = data.data;
  console.log(`data::${projectItem.id}`);
  const Title = projectItem.properties[""]["title"][0].text.content;
  const skillSet =
    projectItem.properties["사용한 기술 스택 및 라이브러리"].multi_select;
  const skills = skillSet.map((aSkill) => aSkill.name);
  const gitHubURL = projectItem.properties["Github"].url;
  console.log(`gitHubURL::${gitHubURL}`);
  const imageURL = projectItem.cover.file?.url;
  console.log("imageURL::", imageURL);

  return (
    <div className="project-card">
      <Image
        src={imageURL}
        width={100}
        height={100}
        layout="responsive"
        objectFit="contain"
      />
      <h1 className="font-bold text-xl">{Title}</h1>
      <div className="flex flex-wrap mt-2">
        {skillSet.map((aSkill) => (
          <div
            key={aSkill.id}
            className="p-2 m-1 bg-sky-200 dark:bg-sky-700 rounded-md text-xs"
          >
            {aSkill.name}
          </div>
        ))}
      </div>
      <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
        🔗깃허브 바로가기
      </a>
    </div>
  );
}
