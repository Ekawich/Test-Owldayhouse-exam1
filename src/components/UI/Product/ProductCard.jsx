import React from "react";
import classes from "./ProductCard.module.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Skeleton } from "@mui/material";

const ProductCard = (props) => {
	return (
		<Card>
			<div className={classes.boxImage}>
				{props.image ? (
					<img src={props.image} alt={props.title} className={classes.productImage} />
				) : (
					<Skeleton variant="rectangular" width="100%" height="100%" />
				)}
			</div>
			<CardContent sx={{ pb: 0 }}>
				<Typography gutterBottom variant="h6" component="div" className={classes.titleLimit} sx={{ mb: 1, fontWeight: "bold" }}>
					{props.title}
				</Typography>
				<Typography gutterBottom variant="p" component="div" className={classes.descLimit} sx={{ mb: 1, opacity: 0.7 }}>
					{props.desc}
				</Typography>
				<Typography variant="h6" sx={{ mr: 1, fontWeight: "bold" }} color="primary">
					{`$${parseFloat(props.price).toFixed(2)}`}
				</Typography>
				<Stack direction="row" alignItems="center">
					<Rating name="read-only" value={props.rating.rate} readOnly sx={{ mr: 1 }} />
					<Typography variant="div" sx={{ mb: 0, fontWeight: "bold", mr: 1 }}>
						{props.rating.rate}
					</Typography>
					<Typography variant="div" sx={{ mb: 0, fontWeight: "bold" }}>
						{`Review ${props.rating.count}`}
					</Typography>
				</Stack>
			</CardContent>
			<CardActions>
				<Button size="small" variant="outlined" fullWidth onClick={props.onClick}>
					Add to Cart
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
