import Navbar from "./components/Navbar/Navbar";
import HomeReveal from "./components/HomeReveal/HomeReveal";

import "./App.css";


function App() {
  return (
    <>
      <Navbar />

      <main className="portfolio-main">
        <HomeReveal />
      </main>
    </>
  );
}


export default App;