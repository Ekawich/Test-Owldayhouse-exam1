import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import classes from "./ItemCart.module.css";

import { Box, Card, CardContent, IconButton, Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";

const ItemCart = (props) => {
	const dispatch = useDispatch();
	const item = props.item || null;

	const removeCart = () => {
		dispatch(cartActions.removeItem(item.id));
	};

	const updateQuantity = (itemId, newQuantity) => {
		dispatch(cartActions.quantityUpdate({ itemId, newQuantity }));
	};

	return (
		<Card sx={{ display: "flex", height: 140, width: { md: 400, xs: "100%" } }}>
			<div className={classes.cartBoxImage}>
				<img src={item.image} alt={item.title} className={classes.cartProductImage} />
			</div>
			<Box sx={{ display: "flex", flexDirection: "column", width: "100%", position: "relative" }}>
				<CardContent sx={{ p: 1, px: 2 }} className={classes.cartContent}>
					<Typography component="h6" sx={{ fontWeight: "bold", fontSize: "medium" }} className={classes.cartItemTitle}>
						{item.title}
					</Typography>
					<Typography sx={{ fontSize: "medium" }}>{`$${parseFloat(item.price).toFixed(2)}`}</Typography>
					<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: "auto" }}>
						<Typography component="div" sx={{ fontSize: "medium", fontWeight: "bold" }} color="primary">
							{`$${parseFloat(item.price * item.quantity).toFixed(2)}`}
						</Typography>
						<Stack direction="row" alignItems="center">
							<IconButton aria-label="minus" color="primary" sx={{ p: 0 }} onClick={() => updateQuantity(item.id, item.quantity - 1)}>
								<RemoveIcon fontSize="small" />
							</IconButton>
							<Typography sx={{ fontSize: "medium", mx: 1 }}>{item.quantity}</Typography>
							<IconButton aria-label="plus" color="primary" sx={{ p: 0 }} onClick={() => updateQuantity(item.id, item.quantity + 1)}>
								<AddIcon fontSize="small" />
							</IconButton>
						</Stack>
					</Stack>
				</CardContent>
				<IconButton aria-label="delete" sx={{ top: 0, right: 0, position: "absolute" }} onClick={removeCart}>
					<ClearIcon fontSize="small" />
				</IconButton>
			</Box>
		</Card>
	);
};

export default ItemCart;
