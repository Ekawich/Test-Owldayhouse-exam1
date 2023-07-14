import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import Categories from "../components/UI/Categories/Categories";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Grid, Skeleton, Stack, Chip, Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import ProductCard from "../components/UI/Product/ProductCard";

let mockupItem = 8;

const Products = () => {
	const dispatch = useDispatch();
	const [products, setProducts] = useState(null);
	const [categories, setCategories] = useState(null);
	const [selectCate, setSelectCate] = useState("");

	useEffect(() => {
		const getProducts = async () => {
			const getProductsByCate = selectCate && `category/${selectCate}`;

			const response = await fetch(`https://fakestoreapi.com/products/${getProductsByCate}`, {
				method: "GET",
			});
			const data = await response.json();
			setProducts(data);
		};

		const getCategories = async () => {
			const response = await fetch("https://fakestoreapi.com/products/categories", {
				method: "GET",
			});
			const data = await response.json();
			setCategories(data);
		};

		getProducts();
		getCategories();
	}, [selectCate]);

	const addToCart = (item) => {
		toast.success("Item has been added", { autoClose: 150 });
		dispatch(cartActions.addToCart({ ...item, quantity: 1 }));
	};

	return (
		<>
			<Grid container spacing={2} columns={12}>
				<Grid item xs={12}>
					<Categories
						categories={categories}
						onClick={(value) => setSelectCate(value)}
						selectCate={selectCate}
						onChange={(value) => setSelectCate(value)}
					/>
				</Grid>
				{products
					? products.map((item) => {
							return (
								<Grid item md={3} sm={4} xs={6} key={item.id}>
									<ProductCard
										categories={item.categories}
										title={item.title}
										desc={item.description}
										price={item.price}
										image={item.image}
										rating={item.rating}
										onClick={() => addToCart(item)}
									/>
								</Grid>
							);
					  })
					: [...Array(mockupItem).keys()].map((item, idx) => {
							return (
								<Grid item md={3} sm={4} xs={6} key={idx}>
									<Skeleton animation="wave" height={700} sx={{ transform: "none" }} />
								</Grid>
							);
					  })}
			</Grid>
			<ToastContainer />
		</>
	);
};

export default Products;
