import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/img/logo.png";

function NavBarElement({ title, classprops }) {
  return (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
  );
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
    <div className="md:flex-[0.5] flex-initial justify-center items-center">

      <img src={logo} alt="logo" className="w-20 cursor-pointer" />

      <h1 style={{height: "20px", width: "20px", fontFamily: "sans-serif", color: "white", fontSize: "30px" }}>
        DEFIX
      </h1>
       
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", "About", "Trade", "Wallets"].map((element, index) => (
          <NavBarElement key={element + index} title={element} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Sign In
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={27} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={27} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          
          <ul
            className="z-15 fixed -top-1 -right-3 p-5 w-[80vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >

      <li style={{fontSize: '1.5rem', width: '100%', marginBottom: '1rem'}}>
       <AiOutlineClose onClick={() => setToggleMenu(false)} />
     </li>

            {["Home", "About", "Trade", "Wallets"].map(

              (element, index) => <NavBarElement key={element + index} title={element} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}


      </div>
    </nav>
  );
};

export default Navbar