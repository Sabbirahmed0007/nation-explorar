import React, { useState } from 'react';

const Country = ({ country, handleVisitedCountries }) => {

  

    const [visited, setVisited] = useState(false)
     


    // console.log(country.capital.capital[0]);
    // console.log(country);
    const { area, capital, flags, name, region, population } = country


    const handleVisited = () => {


        // System One
        // if (visited) {
        //     setVisited(false)
        // } else {
            
        //     setVisited(true);
        // }
        // -------------------------------------

        // System Two

        // setVisited(visited ? false : true);
        // ---------------------------------
        // System three

        setVisited(!visited);
        handleVisitedCountries(country);
        
    }





    return (
        <div className={`shadow-2xl border-2 p-2  rounded-2xl mx-5 text-left ${visited? 'bg-cyan-400 border-2 border-red-500': 'bg-amber-200'}`
}>
            <div className='h-56'>
                <img className='h-full w-full rounded-2xl' src={flags.flags.png} alt={flags.flags.alt} />

            </div>
            <div className='mt-5'>
                <h3>Country: <span className='text-lg font-semibold'>{name.common}</span></h3>
                <h3>Country: {region.region}</h3>
                <h4>Capital: { capital.capital[0]}</h4>
                <p>Population: {population.population}</p>
                <p>Area: {area.area} sq Km<span className={`badge ${visited?'badge-error': 'badge-info'}  mx-10 text-white font-semibold`}>{area.area > 300000 ? "Big Country" : "Small country"}</span></p>
                <button onClick={handleVisited} className='btn my-4'>{
                visited? "Visited": "Not Visited"
                }</button>
            </div>
            
        </div>
    );
};

export default Country;