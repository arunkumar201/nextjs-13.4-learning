'use client'

import React, { useEffect } from "react";

type Props = {
	params: {
		user: string[];
	};
};
const Page = ({ params }: Props) => {
	useEffect(() => {
		console.log("🚀 ~ file: page.tsx:10 ~ page ~ params:", params.user[0]);
	},[params])


	return <div>user Info of user id  arun {params.userId}page</div>;
};
export default Page;
