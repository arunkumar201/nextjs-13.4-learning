import React from "react";

type Props = {
	params: {
		tag: string;
		item: string;
	};
};

const ShopItem = (props: Props) => {
	return (
		<>
			<div>Shop item {props.params.tag}</div>
			<h1>{props.params.item}</h1>
		</>
	);
};

export default ShopItem;
