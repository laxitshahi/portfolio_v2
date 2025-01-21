type Props = {};

export default function Navbar({ }: Props) {
  const links = [
    { name: "home", url: "" },
    { name: "about", url: "" },
    { name: "projects", url: "" },
  ];
  return (
    <ul className="flex space-x-4">
      {links.map((link) => (
        <li>
          <a>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}
