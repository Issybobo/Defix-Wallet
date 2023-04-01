

import React from "react";

import logo from "../assets/img/logo.png";

function Note() {

  return (

    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-Note">

      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">

        <div className="flex flex-[0.5] justify-center items-center">

          <img src={logo} alt="logo" className="w-32" />

        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">Home</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">About</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Trade</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
        </div>
      </div>
      <div className="mt-7 flex justify-center items-center flex-col">
        <p className="text-center text-xl text-white">For more enquiries reach out to us on</p>
        <p className="mt-2 text-center text-l font-medium text-white">www.defixwallet.com</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
      <div className="mt-7 flex justify-center items-center flex-col text-white">

        <footer>
          <p>&copy; 2023 Defix Wallet. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}

export default Note;