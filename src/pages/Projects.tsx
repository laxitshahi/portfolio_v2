export default function Projects() {
  const projects = [
    {
      name: "LLM Proxy",
      desc: "Make LLMs simple",
      link: "https://github.com/llm-proxy/llm-proxy",
    },
    {
      name: "Patch",
      desc: "Price + Match",
      link: "https://github.com/laxitshahi/patch",
    },
    {
      name: "Portfolio v1",
      desc: "Version 1 portfolio",
      link: "https://v1.laxitshahi.me",
    },
  ];

  return (
    <>
      <h1 className="text-2xl">Rad[ical] projects</h1>
      <div className="p-4"></div>
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
