import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "../pages/Products";

const Routers = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Products />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Routers;
