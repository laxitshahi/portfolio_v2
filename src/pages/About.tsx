export default function About() {
  return (
    <div className="justify-center">
      <h1 className="text-2xl">A bit about me</h1>
      <div className="p-4"></div>
      <img className="w-60" src="me.svg" />
      <span>
        I thought about making a inconceivable portfolio!! Then I realized it's
        1:14am, and I have work tomorrow. At any rate, I'm a Computer
        Engineering graduate who fell in love with the level of ability to
        create something from almost nothing with software. This passion grew
        rapidly through my personal projects and experiences at companies like
        Shopify, Intact, and goeasy. I've also dabbled in startups - one of the
        most difficult but fulfilling experiences in my life.
        <span className="hover:text-white text-black hover:cursor-pointer">
          <span className="italic"> Note to self:</span> Make sure to finish
          this section before you start balding...?
        </span>
      </span>
    </div>
  );
}
