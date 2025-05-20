/** @format */

import React from "react";
import Image7 from "/Images/image-7.png";
import Image9 from "/Images/image-9.png";
import Image8 from "/Images/image-8.png";
import Image12 from "/Images/image 12.png";
import Image10 from "/Images/image 10.png";
import Image11 from "/Images/image 11.png";

const Services = () => {
	return (
		<div
			className="md:m-auto md:max-w-[920px] m-auto max-w-[540px] "
			id="Services"
		>
			{/* m-auto w-[960px] min-w-64 w-full max-w-5xl */}
			<div className="mx-4">
				<h2 className="text-center mb-8 text-[#0000FA] font-bold md:text-4xl text-2xl">
					Services
				</h2>

				<p className="mb-8 text-justify">
					We also render various types of blasting and painting services to
					the Oil and Gas Industry, including Ultra High Pressure (UHP),
					Hydro Blasting and more traditional grit and steel ball blasting.
					All our coating systems are applied in accordance with the
					respective paint manufacturers specifications. This process is
					closely monitored throughout the coating application.
				</p>

				<div className="flex flex-col justify-center md:flex-row gap-8 mx-4">
					<img
						className="w-80 h-64 md:h-52 md:w-72 rounded-lg shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b]"
						src={Image7}
						alt=""
					/>
					<img
						className="w-80 h-64 md:h-52 md:w-72 rounded-lg shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b]"
						src={Image9}
						alt=""
					/>
					<img
						className="w-80 h-64 md:h-52 md:w-72 rounded-lg shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b]"
						src={Image8}
						alt=""
					/>
				</div>
			</div>
			<div className="mt-8 mx-4">
				<h2 className="py-10 font-bold text-xl md:text-4xl text-center">
					Fabrication Optimum Maintenance services
				</h2>

				<div className="flex flex-col md:flex-row justify-center gap-16 md:gap-8 md:mb-12 mx-2">
					<div className="w-80 h-64 md:h-52 md:w-72 shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b]">
						<img
							className="w-80 h-64 md:h-52 md:w-72 rounded-t-lg"
							src={Image12}
							alt=""
						/>
						<p className="bg-[#0000FA] text-center py-3 text-white text-sm">
							Visit and check by Professional Team
						</p>
					</div>
					<div className="w-80 h-64 md:h-52 md:w-72 shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b]">
						<img
							className="w-80 h-64 md:h-52 md:w-72 rounded-t-lg"
							src={Image10}
							alt=""
						/>
						<p className="bg-[#0000FA] text-center py-3 text-white text-sm">
							Propose an Optimum Maintenance Plan
						</p>
					</div>
					<div className="w-80 h-64 md:h-52 md:w-72 shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b]">
						<img
							className="w-80 h-64 md:h-52 md:w-72 "
							src={Image11}
							alt=""
						/>
						<p className="bg-[#0000FA] text-center py-3 text-white text-sm">
							Maintenance
						</p>
					</div>
				</div>
				<div>
					<p className="mt-16 text-justify">
						Our maintenance service can cover any type of defects /
						anomalies / deteriotation. The most typical is corrosions on
						the steel over a long time service.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
