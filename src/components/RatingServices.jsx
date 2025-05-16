/** @format */

import React from "react";

const RatingServices = () => {
	return (
		<div className="bg-[#EB1E23] my-12">
			{/* w-full max-w-5xl mx-auto */}
			{/* md:m-auto w-[920px] my-auto mx-10 md:flex */}
			<div className="flex flex-col md:flex-row md:justify-between md:m-auto md:max-w-[920px] text-white">
				<div className="text-center my-8 ">
					<p className="font-semibold text-lg py-2">98.9%</p>
					<p className="text-lg">Customer Satisfaction</p>
				</div>
				<div className="text-center my-8 ">
					<p className="font-semibold text-lg py-2">1000+</p>
					<p className="text-lg">Completed Jobs</p>
				</div>
				<div className="text-center my-8 ">
					<p className="font-semibold text-lg py-2">99.9%</p>
					<p className="text-lg">Operating Efficiency</p>
				</div>
			</div>
		</div>
	);
};

export default RatingServices;
