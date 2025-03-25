export default function Country({country}){
    // const {} = country
    console.log(country)
   
    return(
        <div className="">
            <div className=" border border-blue-300 p-5 bg-blue-300 rounded-2xl">
                <h3>Country Name:{country.name.common}</h3>
                <p>currency</p>
            </div>
        </div>
    )
}