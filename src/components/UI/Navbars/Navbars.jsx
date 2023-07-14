import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Badge, Stack } from "@mui/material";

const Navbars = () => {
	const dispatch = useDispatch();
	const cartItem = useSelector((state) => state.cart.items);
	const totalQuantity = cartItem.reduce((acc, item) => acc + item.quantity, 0);

	const toggleCart = () => {
		dispatch(cartActions.toggleCart());
	};
	return (
		<>
			<AppBar position="sticky">
				<Container maxWidth="xl">
					<Toolbar>
						<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { sm: "block", md: "none" } }}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
							FakeStore
						</Typography>
						<Stack spacing={2} direction="row" sx={{ mr: 2 }}>
							<IconButton aria-label="ShoppingCart" size="large" onClick={toggleCart}>
								<Badge badgeContent={totalQuantity} color="primary">
									<ShoppingCartIcon />
								</Badge>
							</IconButton>
						</Stack>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

export default Navbars;
