import { useEffect, useState } from "react";

type Props = {};

export default function Greeting({ }: Props) {
  const [gymLikePer, setGymLikePer] = useState(99);

  const randVal = () => Math.floor(Math.random() * (50 - 10 + 1)) + 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setGymLikePer(randVal);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-2xl">Howdy 88</h1>
      <div className="p-4"></div>
      <div>
        My name's Laxit. I'm a software engineer{" "}
        <span className="italic"> (Am I legally allowed to say this?) </span>
        who likes to forge code with my bare hands. I also fancy neovim, books,
        and working out{" "}
        <span className="italic">({gymLikePer}% of the time)</span>. Currently,
        I'm working at {""}
        <span className="line-through"> Spotify</span> Shopify - helping improve
        the POS system.
      </div>
    </>
  );
}
