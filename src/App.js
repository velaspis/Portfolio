import Navbar from "./scenes/Navbar.jsx";
import React, { useState, useEffect } from "react";
import MySkills from "./scenes/MySkills";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing.jsx";
import { motion } from "framer-motion";
import LineGradient from "./components/LineGradient";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  //determines what page ur on
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");
  //determines if ur on a medium screen or not
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        SelectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMedium && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          ></DotGroup>
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        ></motion.div>
        <Landing setSelectedPage={setSelectedPage} />
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full ">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("skills")}
          >
            <MySkills />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
