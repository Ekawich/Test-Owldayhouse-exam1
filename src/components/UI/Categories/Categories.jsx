import React from "react";
import classes from "./Categories.module.css";
import { Skeleton, Stack, Chip, Box } from "@mui/material";

const Categories = (props) => {
	return (
		<>
			{props.categories ? (
				<Box>
					<Stack direction="row" spacing={2} sx={{ display: { sm: "block", xs: "none" } }}>
						<Chip label="All category" onClick={() => props.onClick("")} variant={props.selectCate === "" ? "outlined" : ""} />
						{props.categories.map((item, idx) => {
							return <Chip label={item} key={idx} onClick={() => props.onClick(item)} variant={props.selectCate === item ? "outlined" : ""} />;
						})}
					</Stack>
					<Box sx={{ display: { sm: "none", xs: "block" } }}>
						<select value={props.selectCate} className={classes.selectCate} onChange={(e) => props.onChange(e.target.value)}>
							<option value="">All category</option>
							{props.categories.map((item, idx) => {
								return (
									<option value={item} key={idx}>
										{item}
									</option>
								);
							})}
						</select>
					</Box>
				</Box>
			) : (
				<Box>
					<Stack direction="row" spacing={2} sx={{ display: { sm: "flex", xs: "none" } }}>
						{[...Array(5).keys()].map((item, idx) => (
							<Skeleton width={70} height={30} key={idx} />
						))}
					</Stack>
					<Skeleton width={200} height={40} sx={{ display: { sm: "none", xs: "block" } }} />
				</Box>
			)}
		</>
	);
};

export default Categories;
