import { CiDark } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import Card from "./card";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Body = () => {
  const [data, setdata] = useState([]);
  const [ser, setSer] = useState(null);
  const[fil,setFil]=useState([]) //store data form search inputbox
  const fundata = async () => {
    const dat = await fetch(`https://restcountries.com/v3.1/all`);
    const result = await dat.json();
    setdata(result);
  };

  useEffect(() => {
    fundata();
  }, []);
 const search=async(value)=>{
  const response=await fetch(`https://restcountries.com/v3.1/name/${value}`);
  const result=await response.json();
  setdata(result)
 }  
 
 const filter=async(value)=>{
  const response=await fetch(`https://restcountries.com/v3.1/region/${value}`);
  const result=await response.json();
  setdata(result)
 }  
 

  //handle element search box
  const handle = (e) => {
    e.preventDefault();
    setSer(e.target.value);
    search(ser);
  };
  const handlefilter = (e) => {
    e.preventDefault();
    setFil(e.target.value);
    filter(fil);
  };


  return (
    <>
      <div className="bg-white p-4 h-[100%] w-[100%]">
        <div className="font-bold text-3xl block">
          Where in the world ?
          <div className="float-right text-2xl flex">
            <CiDark className="m-2" />
            Dark Mode
          </div>
        </div>
      </div>
      <div>
        <div className="bg-slat flex drop-shadow-xl m-8 w-[510px] bg-white rounded-xl">
          <CiSearch className="mt-5 ml-6 h-9 w-9" />
          <input
            type="text"
            name="search box"
            onChange={handle}
            className="p-1 w-[100%] outline-none text-2xl  text-black  text-left"
            placeholder="search here for a country....."
          />
        </div>
        <select
          className="float-right mr-10 drop-shadow-xl mt-[-80px] bg-white p-4  w-[400px] rounded-sm flex"
          onChange={handlefilter}
        >
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="North America">Antarctic</option>
          <option value="South America">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Austrila">Austrila</option>
          <option value="ocean">Oceania</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-3">
        <Card data={data} className="" />
      </div>
    </>
  );
};

export default Body;
