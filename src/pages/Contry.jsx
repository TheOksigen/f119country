import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Contry() {
	const { zirt } = useParams()
	const [country, setCountry] = useState([])
	let navigatee = new useNavigate()
	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/alpha/${zirt}`)
			.then(response => response.json())
			.then(data => setCountry(data))
	}, [zirt])
	console.log(country);

	return (
		<>
			<div>Contry</div>
			<button onClick={()=> {navigatee("/")}}>OK</button>
			{console.log(country?.borders)}
			{country[0]?.borders?.map(item => {
				return <button className='p-1 border' onClick={() => { navigatee(`/country/${item}`) }}>{item} <br /></button>
				//console.log(item);
			})}
		</>

	)
}

export default Contry