import { useState } from "react";
import { Link,Navigate, useNavigate } from 'react-router-dom';

const Card = ({data}) => {
  const navigate=useNavigate();
  const handleCard=(index,data)=>{
    navigate(`/SearCard/${index}`,{state:{data}})
  }
  return (
  
    <>

     
   {data.length>0?(data.map((data,index)=>(
 
    <div className='h-[320px] overflow-hidden w-[420px] bg-white drop-shadow-2xl ml-4 block' key={index} onClick={()=>handleCard(index,data)}>
        <div className="">
          <img src={data?.flags?.png} alt={data?.flags?.alt} className="w-[100%] h-[200px]" />
        </div>
        <div className="ml-4">
            <h1 className="font-bold text-2xl">{data?.name?.common}</h1>
            <p className="font-bold">Population: <span className="font-thin">{data?.population}</span></p>
            <p className="font-bold">Religion: <span className="font-thin">{data?.region}</span></p>
            <p className="font-bold">Capital: <span className="font-thin">{data.capital ? data.capital[0] : 'N/A'}</span></p>
        </div>
    </div>))):(<p className="font-bold text-center justify-center items-center text-4xl text-red-600">data is loading.....</p>) } 
   </>
  
    
  )
}

export default Card