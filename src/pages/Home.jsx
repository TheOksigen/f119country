import React, { useContext } from 'react'
import { Olkeler } from '../Contex/DataContex'
import Card from '../Elements/Card';
import { nanoid } from 'nanoid';

function Home() {
	const data = useContext(Olkeler)
	return (

		<div className='p-3 flex gap-10 flex-wrap justify-center bg-slate-600'>
			{data.map((item) => (
				<Card key={nanoid()} item={item} />
			))}
		</div>
	)
}

export default Home