/** @format */

import React from "react";
import Image57 from "/Images/image (57).png";

const WS2 = () => {
	return (
		<div className="relative overflow-hidden text-white bg-black/65">
			<section className=" md:m-auto md:max-w-[920px] max-w-[540px] my-12 mx-4">
				<img
					src={Image57}
					alt="bg"
					className="absolute top-0 left-0 w-full h-full md:object-fill object-cover -z-10"
				/>
				<div className="h-[80vh] flex flex-col justify-center items-center gap-10 text-center w-full max-w-5xl mx-auto">
					<h1 className="md:text-4xl text-2xl">
						Building Trust, One Project at a Time.
					</h1>

					<p className="text-lg md:text-2xl ">
						We deliver other services like Civil Engineering works,
						Fabrication Engineering/ installation, Logistics, Equipment
						leasing, Solar street light installation, Corrosion control/
						protection etc.
					</p>
				</div>
			</section>
		</div>
	);
};

export default WS2;
