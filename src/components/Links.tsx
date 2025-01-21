type Props = {};

export default function Links({ }: Props) {
  const links = [
    { name: "github", url: "https://github.com/laxitshahi" },
    { name: "linkedin", url: "https://www.linkedin.com/in/laxitshahi/" },
    { name: "email", url: "https://theuselessweb.com/" },
  ];
  return (
    <ul className="flex space-x-4">
      {links.map((link) => (
        <li>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}
