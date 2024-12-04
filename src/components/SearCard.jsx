import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';


const SearCard = () => {
  
    const location=useLocation();
 const fil=location.state?.data
 console.log(fil);

    // const fundata = async () => {
        
    //     const dat = await fetch(`https://restcountries.com/v3.1/name/nepal`);
    //     const result = await dat.json();
    //     setdata(result);
    //   };
    
    //   useEffect(() => {
    //     fundata();
    //   }, []);
  return (
    <>
    
    <div className='flex  justify-center items-center mt-16  '>
        <div className='h-[420px] w-[420px] ml-32 w-94 bg-white flex justify-center items-center border-solid'> <img src={fil?.flags?.png} alt={fil?.flags?.alt} className=" w-[100%] h-[100%]" /></div>
        <div className=" bg-white h-[420px] w-[400px]  block  justify-center items-center">
          <div className='ml-9 mt-6'>
          <h1 className="font-bold text-2xl mt-4">{fil?.name?.common}</h1>
         <p className="font-bold">Population: <span className="font-thin">{fil.name?.common}</span></p>
         <p className="font-bold">Religion: <span className="font-thin">{fil?.region}</span></p>
         <p className="font-bold">Capital: <span className="font-thin">{fil.capital ? fil.capital[0] : 'N/A'}</span></p>
          </div>
         
     </div>
    </div>
    
     
    </>
  )
}

export default SearCard