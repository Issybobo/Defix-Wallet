import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

function ServiceCard({ color, title, icon, subtitle }) {
  return (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">

      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>

      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
        <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );
}

function Works() {
  return (

    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">

          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient underline ">
            Services that we offer
            <hr className="width: m-2"></hr>
          </h1>
        </div>

        <div className="flex-1 flex flex-col justify-start items-center">
          <ServiceCard
            color="bg-[#2952E3]"
            title="Guarantee of security"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="We always maintain the quality of our client and guarantee security by ensuring privacy"
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="Optimal cryptocurrency exchange rates"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}

            subtitle="For cryptocurrency, we offer cheap and reliable exchange rate for anyone trading with us"
          />
          <ServiceCard
            color="bg-[#F84550]"

            title="Fast transactions"
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            
            subtitle="We provide swift and efficient transfer of cryptocurrency between all our irrespective users ."
          />
        </div>
      </div>
    </div>
  );
}

export default Works;





