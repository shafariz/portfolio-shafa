import { useState } from "react";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Navbar from "./components/Navbar/Navbar";
import HomeReveal from "./components/HomeReveal/HomeReveal";

import "./App.css";


function App() {

  const [isLoading, setIsLoading] = useState(true);


  if (isLoading) {

    return (

      <LoadingScreen
        onComplete={() =>
          setIsLoading(false)
        }
      />

    );

  }


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