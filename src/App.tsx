import Greeting from "./components/Greeting";
import Links from "./components/Links";
import Navbar from "./components/Navbar";

function App() {
  return (

    <div className="grid place-items-start px-96 py-14">
      <Navbar />
       

      <div className="p-10"></div>

      <Greeting />

      <div className="p-10"></div>
      <Links/>
    </div>
  );
}

export default App;
