/** @format */

import React from "react";
import Image57 from "../assets/Images/image (57).png";

const WS2 = () => {
	return (
		<div>
			<section className="relative overflow-hidden text-white bg-black/35 my-12">
				<img
					src={Image57}
					alt="bg"
					className="absolute top-0 left-0 w-full h-full object-fill -z-10"
				/>
				<div className="h-[80vh] flex flex-col justify-center items-center gap-10 text-center w-full max-w-5xl mx-auto">
					<h1 className="text-4xl">
						Building Trust, One Project at a Time.
					</h1>

					<p className="text-2xl">
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
