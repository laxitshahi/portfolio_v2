import { useState } from "react";

type Props = {};

export default function Links({ }: Props) {
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
              alert("weeooweeoo, speical website unlocked!! Sometimes I wonder if the only purpose of posting your email on your portfolio is to be scrapped. Even that would a wonderous occasion.");
            }
          }}
        >
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}
