import React from 'react';
import { NavLink } from 'react-router-dom';

function Card({ item }) {
  const { name, flags, population, capital, region, ccn3 } = item;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg object-cover w-full h-48" src={flags.png} alt={`${name.common} flag`} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name.common}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Population:</b> {population.toLocaleString()}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Region:</b> {region}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Capital:</b> {capital}</p>
        <NavLink 
          to={`david/${ccn3}`} 
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
