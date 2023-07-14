import React from "react";
import Navbars from "../UI/Navbars/Navbars";
import ShoppingCart from "../UI/Cart/ShoppingCart";

import { Container } from "@mui/material";

const Layout = (props) => {
	return (
		<>
			<Navbars />
			<Container maxWidth="xl" sx={{ py: 3 }}>
				<main>{props.children}</main>
				<ShoppingCart />
			</Container>
		</>
	);
};

export default Layout;
