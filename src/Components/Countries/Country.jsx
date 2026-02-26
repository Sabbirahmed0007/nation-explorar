import React from 'react';

const Country = ({ country }) => {


    console.log(country.capital.capital[0]);
    console.log(country);
    const { capital, flags, name ,region ,population} = country






    return (
        <div className='flex items-center justify-between   shadow-2xl border-2 p-2 bg-amber-200 rounded-2xl mx-5'>
            <div className='h-16 w-24 '>
                <img className='h-full w-full rounded-2xl' src={flags.flags.png} alt={flags.flags.alt} />

            </div>
            <div className='relative'>
                <select className='absolute right-0 w-36 overflow-auto'>
                    <option value="name">{ name.common}</option>
                    <option value="bangladesh" className='overflow-auto'>{ name.official}</option>
                    <option value="capital">Capital: {capital.capital[0]}</option>
                    <option value="region">Region: { region.region}</option>
                    <option value="region">Populaton: { population.population}</option>
                </select>

            </div>
        </div>
    );
};

export default Country;