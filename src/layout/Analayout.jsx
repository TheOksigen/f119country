import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import DataContex from '../Contex/DataContex';


export default function Analayout() {
	return (
		<DataContex>
			<Header />
			<Outlet  />
			<Footer />
		</DataContex>
	)
}

