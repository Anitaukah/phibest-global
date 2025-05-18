/** @format */

import React from "react";
import Image42 from "../assets/Images/image (42).png";
import Image43 from "../assets/Images/image (43).png";
const WhyChooseUs = () => {
	return (
		<div className="md:m-auto md:max-w-[920px] m-auto max-w-[540px] ">
			<div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:justify-between relative mx-4 mb-12">
				<div className="relative">
					<img
						className="w-52 h-72 md:w-80 md:h-80"
						src={Image42}
						alt="img 42"
					/>
					<div className="absolute bottom-0 md:-right-[42px] right-28">
						<img className="md:h-32 h-28" src={Image43} alt="" />
					</div>
				</div>
				<div className="mt-8 md:w-[400px]">
					<h1 className="text-3xl md:text-4xl mb-4 font-semibold text-center">
						Why Choose Us
					</h1>
					<p className="text-lg text-justify">
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
