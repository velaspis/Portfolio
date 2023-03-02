import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
const link =({page,selectedPage,setSelectedPage})=>{
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
        className={`${selectedPage===lowerCasePage ? "text-yellow" :"text-white"}
        hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`} 
        onClick={() => {setSelectedPage(lowerCasePage)}}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallscreens = useMediaQuery("(min-width:760px)");
  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">VE</h4>

        {/*Desktop nav*/}

        {isAboveSmallscreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
          <link 
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={selectedPage} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
