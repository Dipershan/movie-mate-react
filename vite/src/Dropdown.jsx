import React, { useState } from 'react'


const Dropdown = () => {
    const locations =[
        {country:"India" ,  cities:["Delhi" ,  "Mumbai"]},
        {country:"Nepal" ,  cities:["Ktm" ,  "Pkr"]},
        {country:"USA" ,  cities:["Texas" ,  "California"]},
    ];

const [country ,  setCountry] =  useState("");
const [city ,  setCity] =  useState("");

const getAllCountries = (locations) =>{
    return locations.map((location) => location.country);
};
const getCities = (country)=>{
        return locations.find(location => location.country ===country).cities;
    }

    console.log(getAllCountries(locations));

  return (
    <div>
        <label >Select a country</label>
        <select onChange={(e)=> setCountry(e.target.value)}>
            <option value="">Select One</option>    
            {getAllCountries(locations).map((country)=>{
                return (
                    <option key ={country} value={country}>
                        {country}
                    </option>

                );

            })}
        </select>

        {country && <DropDown label="City"  data={getCities(country)} setData={setCity}/>}
    </div>
  )
};

const DropDown = ({data  , label = "" ,setData})=>{
    console.log(data);
    return <>
        <select onChange={(e)=> setData(e.target.value)} >
            <option value="">Select a{label}</option>
            {
                data.map((d)=>{
                    return(
                        <option key={d} value={d}
                        >{d}</option>
                    )
                })
            }
        </select>
    </>
}

export default Dropdown



