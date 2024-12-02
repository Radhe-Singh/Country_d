import { CiDark } from "react-icons/ci"
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import Card from "./card";
import { useEffect, useState } from "react";

const Body = () => {
const[data,setdata]=useState([]);
const url=`https://restcountries.com/v3.1/all`

useEffect(()=>{
  const fundata=async()=>{
    const dat=await fetch(url);
    const result=await dat.json();
    setdata(result);
  };
  fundata();
}
,[])


  return (
    <>

    <div className='bg-white p-4 h-[100%] w-[100%]'>
    <div className='font-bold text-3xl block'>Where in the world ?
    <div className='float-right text-2xl flex'><CiDark className="m-2" />Dark Mode</div>
    </div>
    </div>
    <div>
    <div className="bg-slat flex drop-shadow-xl m-8 w-[510px] bg-white rounded-xl">
    <CiSearch className="mt-5 ml-6 h-9 w-9"/>
      <input type="text" name="search box" id="" className="p-1 w-[100%] outline-none text-2xl  text-black  text-left" placeholder="search here for a country....." />
    </div>
        <select className="float-right mr-10 drop-shadow-xl mt-[-80px] bg-white p-4  w-[400px]rounded-sm flex">Filter by Religion<FaAngleDown />
        <option value="FilterByreligion">filter By religion</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">south America</option>
        <option value="Europe">Europe</option>
        <option value="Austrila">Austrila</option>
        <option value="ocean">ocean</option>

        </select>
    </div>
    <div className="flex flex-wrap gap-3">
    <Card data={data} className="absolute"/>


    </div>
    </>
    
  )
}

export default Body