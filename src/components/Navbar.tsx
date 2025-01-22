type Link = {
  name: string;
  url: string;
};

type Props = {
  links: Link[];
  page: string;
  setPage: (value: string) => void;
};

export default function Navbar({ links, setPage }: Props) {
  return (
    <ul className="flex space-x-4">
      {links.map((link) => (
        <li className="hover:cursor-pointer" onClick={() => setPage(link.name)}>
          <a>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}
