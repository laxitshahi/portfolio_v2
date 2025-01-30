export default function Projects() {
  const projects = [
    {
      name: "LLM Proxy",
      desc: "Capstone project",
      link: "https://github.com/llm-proxy/llm-proxy",
    },
    {
      name: "Portfolio v1",
      desc: "Version 1 portfolio",
      link: "https://v1.laxitshahi.me",
    },
    {
      name: "Patch",
      desc: "First piece of software",
      link: "https://github.com/laxitshahi/patch",
    },
  ];

  return (
    <>
      <ul className="space-y-2">
        {projects.map((proj) => {
          return (
            <div className="flex space-x-2 items-center">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:cursor-pointer hover:underline decoration-white"
              >
                {proj.name}
              </a>

              <span>
                {" | "}
                {proj.desc}
              </span>
            </div>
          );
        })}
      </ul>
    </>
  );
}
