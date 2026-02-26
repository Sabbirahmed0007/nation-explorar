import React from 'react';

const VisitedCountry = ({ visitedCountry }) => {

    const { area, capital, flags, name, region, population } = visitedCountry;


    return (
        <div>
            <div className='shadow-2xl border-2 p-2  rounded-2xl mx-5 text-left bg-amber-200'>
                <div className='h-56'>
                    <img className='h-full w-full rounded-2xl' src={flags.flags.png} alt={flags.flags.alt} />

                </div>
                <div className='mt-5'>
                    <h3>Country: <span className='text-lg font-semibold'>{name.common}</span></h3>
                    <h3>Country: {region.region}</h3>
                    <h4>Capital: {capital.capital[0]}</h4>
                    <p>Population: {population.population}</p>
                    <p>Area: {area.area} sq Km<span className='badge badge-info  mx-10 text-white font-semibold'>{area.area > 300000 ? "Big Country" : "Small country"}</span></p>
                    <button  className='btn my-4'>Visited</button>
                </div>

            </div>
            
        </div>
    );
};

export default VisitedCountry;