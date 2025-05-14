/** @format */

import React from "react";
import Image42 from "../assets/Images/image (42).png";
import Image43 from "../assets/Images/image (43).png";
const WhyChooseUs = () => {
	return (
		<div className="w-full max-w-5xl mx-auto">
			<div className=" flex justify-center gap-10 relative">
				<div className="relative">
					<img src={Image42} alt="img 42" />
					<div className="absolute bottom-0 -right-[42px]">
						<img className="h-32" src={Image43} alt="" />
					</div>
				</div>
				<div className="mt-8">
					<h1 className="text-2xl mb-4 font-semibold">Why Choose Us</h1>
					<p className="text-lg">
						Phibest Global Services Limited is a major supplier of
						petroleum product to companies, government parastatal and
						public consumers facilities for their day to day activities.
						The product are; A.G.O, DPK, PMS etc.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
