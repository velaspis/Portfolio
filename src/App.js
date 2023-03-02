import Navbar from "./scenes/Navbar.jsx";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  //determines what page ur on
  const [isAboveMediumScreens, setisAboveMediumScreens] =
    useMediaQuery("(min-width:1060px)");
  //determines if ur on a medium screen or not
  return (
    <div className="app bg-deep-blue">
      <Navbar SelectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
