import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Analayout from "../layout/Analayout";
import Home from "../pages/Home";
import Contry from "../pages/Contry";
import DataContex from "../Contex/DataContex";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Analayout />}>
			<Route index element={<Home />} />
			<Route path="david/:zirt" element={<Contry />} />
		</Route>

	)
)