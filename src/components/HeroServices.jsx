/** @format */

import React from "react";
import Image8 from "../assets/Images/image-8.png";
const HeroServices = () => {
	return (
		<div>
			<div className=" relative overflow-hidden text-white bg-black/65 mt-3">
				<section className="md:m-auto md:max-w-[920px] m-auto max-w-[540px] mx-4">
					<img
						src={Image8}
						alt="bg"
						className="absolute top-0 left-0 w-full h-full object-cover -z-10"
					/>
					<div className="h-[80vh] flex flex-col justify-center items-center gap-10 text-center w-full max-w-6xl mx-auto">
						<p className="md:text-5xl text-2xl text-white animate__animated animate__fadeInDown">
							Reliable Industrial Cleaning & Maintenance Services
						</p>

						<p className="text-lg md:text-3xl text-white text-center animate__animated animate__fadeInDown">
							We specialize in safe, efficient, and professional services
							including tank maintenance, Bitumen cleaning, and waste
							management, tailored to meet the needs of the oil, gas, and
							energy sectors.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default HeroServices;
