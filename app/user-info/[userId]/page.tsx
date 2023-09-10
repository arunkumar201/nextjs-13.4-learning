import React from "react";

type Props = {
	params: {
		userId: string;
	};
};

const page = ({ params }: Props) => {
	return <div>user Info of user id {params.userId}page</div>;
};
export default page;
