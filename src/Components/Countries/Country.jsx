import React from 'react';

const Country = ({ country }) => {
    

    console.log(country.capital.capital[0]);
    console.log(country);
    const{capital, flags, name}=country
    
    
    
    


    return (
        <div>
            <div>
                <img src={flags.flags.png} alt={flags.flags.alt} />
            </div>
        </div>
    );
};

export default Country;