import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Links from "./components/Links";
import Secret from "./pages/Secret";

function App() {
  const [page, setPage] = useState("home");
  const links = [
    { name: "home", url: "" },
    { name: "about", url: "" },
    { name: "projects", url: "" },
  ];

  return (
    <div className="grid place-items-start px-12 py-4 sm:px-20 sm:py-8 md:px-44 md:py-12 lg:px-72 lg:py-14 xl:px-72 xl:py-14">
      <Navbar links={links} page={page} setPage={setPage} />

      <div className="p-10"></div>

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "projects" && <Projects />}
      {page === "secret" && <Secret setPage={setPage} />}

      <div className="p-10"></div>
      <Links />

      <div className="absolute bottom-0 right-0 text-[4px] sm:text-[5px] md:text-[6px] lg:text-[7px] ">
        <button onClick={() => setPage("secret")}>
          Shh... Secret
        </button>
      </div>
    </div>
  );
}

export default App;
