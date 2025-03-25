
import Country from "./country"
export default function Countries({countries}){
    return(
        
        <div className="grid grid-cols-3 gap-4 ">
            {
                countries.map(country=> <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    )
}