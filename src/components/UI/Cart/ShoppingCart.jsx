import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import ItemCart from "./ItemCart";

import { Box, Typography, Stack, Button, Drawer, Grid, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = () => {
	const dispatch = useDispatch();
	const cartItem = useSelector((state) => state.cart);
	const [savedCart, setSavedCart] = useState(JSON.parse(localStorage.getItem("cart")) || null);
	const [cartLoading, setCartLoading] = useState(false);

	useEffect(() => {
		if (!cartLoading) {
			if (savedCart) {
				dispatch(cartActions.cartLoading(savedCart));
			}
			setCartLoading(true);
		} else {
			localStorage.setItem("cart", JSON.stringify({ ...cartItem, shoppingCart: false }));
		}
	}, [cartItem]);

	const handleClose = () => {
		dispatch(cartActions.toggleCart());
	};
	return (
		<>
			<Box sx={{ width: "auto" }} role="presentation">
				<Drawer anchor={"right"} open={cartItem.shoppingCart} onClose={handleClose}>
					<Box sx={{ width: { md: 400, sm: "100%" }, p: 2, height: "100%", position: "relative" }}>
						<Stack direction="column" spacing={2}>
							<Typography id="modal-modal-title" variant="h5" component="h2" textAlign="center" sx={{ fontWeight: "bold", mb: 2 }}>
								My Cart
							</Typography>
							<Box sx={{ height: "80vh", overflowY: "auto", mb: 2 }}>
								<Grid container columns={12} spacing={2} sx={{ height: cartItem.items.length === 0 ? "100%" : "auto" }}>
									{cartItem.items.length > 0 ? (
										cartItem.items.map((item, idx) => {
											return (
												<Grid item md={12} key={item.id}>
													<ItemCart item={item} />
												</Grid>
											);
										})
									) : (
										<Grid item md={12} sx={{ height: "100%" }}>
											<Stack direction="column" alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
												<Typography variant="h6" sx={{ opacity: "0.5" }}>
													Don't have item
												</Typography>
											</Stack>
										</Grid>
									)}
								</Grid>
							</Box>
							<Typography id="modal-modal-title" variant="h5" component="h2" textAlign="right" sx={{ mb: 2 }}>
								{`Total amount $${parseFloat(cartItem.totalPrice).toFixed(2)}`}
							</Typography>
							<Stack direction="row" justifyContent="end">
								<Button variant="outlined" size="large" fullWidth>
									Check Out
								</Button>
							</Stack>
						</Stack>
						<IconButton aria-label="delete" sx={{ top: 0, right: 0, position: "absolute" }} onClick={handleClose}>
							<ClearIcon fontSize="small" />
						</IconButton>
					</Box>
				</Drawer>
			</Box>
		</>
	);
};

export default Cart;
