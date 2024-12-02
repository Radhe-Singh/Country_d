const Card = ({data}) => {
  return (
    <>
    {data.map((data,index)=>(
 
    <div className='h-[320px] w-[420px] bg-white drop-shadow-2xl ml-4 block' key={index}>
        <div className="">
          <img src={data?.flags?.png} alt={data?.flags?.alt} className="w-[100%] h-[200px]" />
        </div>
        <div className="ml-4">
            <h1></h1>
            <p className="font-bold">Population: <span className="font-thin">{data?.name?.common}</span></p>
            <p className="font-bold">Religion: <span className="font-thin">{data?.region}</span></p>
            <p className="font-bold">Capital: <span className="font-thin">{data.capital ? data.capital[0] : 'N/A'}</span></p>
        </div>
    </div>)) }
    </>
  
    
  )
}

export default Card