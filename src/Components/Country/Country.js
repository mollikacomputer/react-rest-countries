import React from 'react';
import './Country.css';
const Country = (props) => {
    const {capital, population, flags, region,name} = props.country
    return (
        <div className='country' >
            <h2> Country Name : {name.common} </h2>
            <h4>Capital Name : {capital}</h4>
            <img src={flags.svg} alt="" />
            <h4>Population : <i> {population} </i> </h4>
            <p>Region : {region}</p>
            
        </div>
    );
};

export default Country;