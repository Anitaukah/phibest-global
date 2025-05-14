/** @format */

import React from "react";

const MetricsSection = () => {
	return (
		<div className="bg-[#0000FA] my-12">
			{/* w-full max-w-5xl mx-auto  */}
			{/* md:m-auto w-[920px] my-auto mx-10 */}
			<div className="w-full max-w-5xl mx-auto md:flex justify-between text-white">
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

export default MetricsSection;
