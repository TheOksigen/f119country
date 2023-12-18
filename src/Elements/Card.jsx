import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(item) {
  const name = item.item.name.common
  const img = item.item.flags.png
  const pop = item.item.population
  const cap = item.item.capital
  const reg = item.item.region


  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      <img className="rounded-t-lg object-cover w-full" src={img} alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Populaiton:</b> {pop} </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Region:</b> {reg}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Capital: </b> {cap}</p>
        <NavLink to={`country/${item.item.ccn3}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
        </NavLink>
      </div>
    </div>

  )
}

export default Card