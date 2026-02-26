import React, { use, useState } from 'react';
import Country from './Country';
import VisitedCountry from '../VisitedCountry/VisitedCountry';

const Countries = ({ countriesPromise }) => {
  const [countVisited, setCountVisited] = useState([]);

  const handleVisitedCountries = (country) => {

    // console.log('Handle Clicked', country);
    const newVisitedCountries = [...countVisited, country];
    setCountVisited(newVisitedCountries)



  }

  console.log(countVisited);



  const countriesData = use(countriesPromise);
  console.log(countriesData.countries);
  const countries = countriesData.countries;





  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <div className='border-2 my-4 mx-3 rounded-2xl'>
        <h1 className=''>Countries I have visited: <span>{countVisited.length}</span></h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 my-10'>
          {
            countVisited.map(visitedCountry => <VisitedCountry visitedCountry={visitedCountry} key={visitedCountry.ccn3.ccn3}></VisitedCountry>)
          }
        </div>
      </div>
      <div className='border-2 p-3 mx-3 rounded-2xl'>

        <div>
          <h1>Countries I haven't visited yet</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 my-10'>
          {
            countries.map(country => <Country handleVisitedCountries={handleVisitedCountries} country={country} key={country.ccn3.ccn3}></Country>)
          }
        </div>
      </div>
    </div>
  );
};

export default Countries;