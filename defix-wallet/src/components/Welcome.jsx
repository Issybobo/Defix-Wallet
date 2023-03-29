import React from 'react'
//import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

//import { Loader } from "./Loader";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange}) =>(
  <input
  placeholder={placeholder}
    type={type}
    step="0.001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
)

const Welcome = () => {


  const handleSubmit = () => {
  }


  const connectWallet = () =>{


}

  return (
    <div class="flex items-center justify-center w-full">
  <div class="flex items-start justify-between flex-col mf:p-20 py-12 px-4 mf:flex-row">
    <div class="flex flex-col items-start justify-start flex-1 mf:mr-10"></div>
    <h1 class="text-3xl sm:text-5xl text-white py-2 text-gradient">
      Buy, Sell, and <br/> Trade Cryptocurrency <br/> with Our Platform
    </h1>

   
    <div class="mt-5 text-white font-light text-2xl md:w-9/12 w-11/12 text-left">
    The simplest way to purchase and sell digital currencies,<br/>
    Buy Bitcoin, Ethereum, and other crypto assets in just a few minutes.
    </div>


      <button 
   type="button" 
  onClick={connectWallet} 
   class="flex items-center justify-center my-5 p-3 rounded-full bg-[#2952e3] hover:bg-[#2546bd] cursor-pointer">

  <p class="text-base font-sans text-white">
    Connect Wallet
  </p>
</button>


<div style={{ position: 'relative' }}>
  <div class="p-6 flex flex-col items-stretch place-content-center justify-end h-40 rounded-xl my-5 sm:w-72 w-full eth-card white-glassmorphism" style={{ display: 'inline-block' }}>
    <div className="flex justify-between flex-col w-full h-full">
      <div style={{ position: 'absolute', top: 10, left: 10 }} class="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
        <SiEthereum fontSize={21} color="#000000" />
      </div>
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <BsInfoCircle fontSize={17} color="#fff" />
      </div>
      <p className="text-white font-thin text-xs absolute bottom-7 sm:text-sm  mf:text-xl lg:text-2xl">
        Address
      </p>
      <p className="text-white font-semibold text-lg absolute bottom-0 sm:text-base md:text-xl lg:text-2xl">
        Ethereum
      </p>
    </div>
    
  </div>
</div>
<div>
<img src="./img/hero2.png" alt="hero image" style={{ display: 'inline-block ' }} />
<img src="./img/hero1.png" alt="hero image" style={{ display: 'inline-block ' }} />
</div>      

<div class="  sm:w-96 w-full flex flex-col justify-start items-stretch blue-glassmorphism text-xl  ">
<Input placeholder="Send To" name ="sendTo" type="text" handleChange={() => {}} />
<Input placeholder="Amount (ETH)" name ="amount" type="number" handleChange={() => {}} />
<Input placeholder="Message" name ="message" type="text" handleChange={() => {}} />

</div>

{false? (
          <Loader></Loader>
     ) : (

      <div>

      </div>
     )}
      
          
             <button
              type="button"
                 onClick={handleSubmit}
                 className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>





<div className="grid sm:grid-cols-5 grid-cols-2 w-full mt-14  border-t-4 border-r- border-b-4 border-l-4" ></div>
           
            <div class="container">
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Peer to Peer
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Decentralization
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
             
            
  
            <img src=".\img\crypto.png" alt="crypto image" style={{ display: 'inline-block' }} />

            <img src=".\img\wallet.png" alt="wallet image" style={{ display: 'inline-block' }} />

            <img src=".\img\currency.png" alt="currency image" style={{ display: 'inline-block' }} />
            
          </div>
         
      
   </div>
   
   </div>
   
  

  );
}

export default Welcome