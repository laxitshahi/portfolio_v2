
export default function Links() {
  const links = [
    { name: "@github ", url: "https://github.com/laxitshahi" },
    { name: ".linkedin", url: "https://www.linkedin.com/in/laxitshahi/" },
    { name: "to:email", url: "https://theuselessweb.com/" },
  ];
  return (
    <ul className="flex space-x-4">
      {links.map((link) => (
        <li
          onClick={() => {
            if (link.name == "to:email") {
              alert(
                "speical website unlocked!! Sometimes I wonder if the only purpose of posting your email on your portfolio is to be scrapped. To be scraped, or not to be scraped, tis the question.",
              );
            }
          }}
        >
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}
