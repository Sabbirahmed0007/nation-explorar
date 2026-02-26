import React, { use } from 'react';
import Country from './Country';

const Countries = ({ countriesPromise }) => {

  const countriesData = use(countriesPromise);
  console.log(countriesData.countries);
  const countries = countriesData.countries;

  

  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5'>
        {
          countries.map(country=><Country country={country} key={country.id}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;