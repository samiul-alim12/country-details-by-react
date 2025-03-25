export default function Country({country}){
    const {name,flags,population,area,capital,continents,subregion,maps,timezones} = country
    
    console.log(country)
   
    return(
        <div className=" w-11/12 mx-auto">
            <div className=" border-2 border-blue-400 bg-white shadow-md p-4 space-y-2 rounded-lg">
                <img className=" border w-full h-50 rounded-2xl" src={flags.png} alt="" />
                <div>
                    <h4 className=" text-center text-2xl font-semibold text-gray-700 border-b-2 pb-5">{name.common}</h4>
                </div>
                <h4 className=" text-center text-xl font-medium text-gray-700">Capital: {capital}</h4>


                <div className=" flex justify-between">
                    <p className=" text-xl font-medium text-gray-600">Population:{population}</p>
                    <p className=" text-xl font-medium text-gray-600">Area:{area}</p>
                </div>
                <div className=" flex justify-between">
                    <p className=" text-xl font-medium text-gray-600">Continents: {continents} ({subregion})</p>
                </div>
                <h4 className="  text-gray-600"><span className=" font-bold">Maps:</span> {maps.googleMaps}</h4>
                <h5 ><span className=" text-xl font-medium text-gray-600">Timezone:</span> {timezones}</h5>

                <div className=" bg-blue-300 rounded-xl p-4 text-center">
                    <span className=" text-base font-medium text-gray-800 ">Official Name:</span> <span  className="  font-medium text-gray-800">{name.official}</span>
                </div>
                
            </div>
        </div>
    )
}