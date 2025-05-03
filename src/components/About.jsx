/** @format */

import React from "react";
import Image from "../assets/Images/image.png";
import Image2 from "../assets/Images/image-2.png";
import Image4 from "../assets/Images/image-4.png";
import Image6 from "../assets/Images/image-6.png";
import Image1 from "../assets/Images/image-1.png";
import IMG1 from "../assets/Images/image 1.png";
import Image3 from "../assets/Images/image-3.png";
import Image5 from "../assets/Images/image-5.png";

const About = () => {
	return (
		<div>
			<div className="m-auto w-[920px] min-w-64">
				<div className="grid grid-cols-2 pb-16">
					{/* bg-[#B0B0FD] */}
					<div className="">
						<img
							className="w-96 h-64 rounded-lg"
							src={Image}
							alt="Three workers wearing safety gear cleaning the inside of a large industrial tank using brushes and a vacuum-like machine"
							loading="lazy"
						/>
					</div>

					<div>
						<h1 className="text-4xl font-bold pb-4">About Us</h1>
						<p className="text-base ">
							Phibest Global Services Limited is a company based in
							Nigeria providing services in Nigeria to oil and oil
							service companies for their offshore and onshore
							activities.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 pb-16">
					<p>
						We render services like Vessel tank cleaning/ Storage tank
						cleaning, Bitumen cleaning and Oil base mod, Barite and
						Bentoment slog, Pipeline fabrication, anode fabrication of
						storage tanks and maintenace.
					</p>
					<div>
						<img
							className="w-96 h-64 rounded-lg"
							src={Image2}
							alt="Workers in high-visibility orange safety suits pressure washing a large asphalt surface in an industrial setting"
							loading="lazy"
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 mb-16">
					<div>
						<img
							className="w-96 h-64 rounded-lg"
							src={Image4}
							alt=""
							loading="lazy"
						/>
					</div>
					<p>
						We render services like Vessel tank cleaning/ Storage tank
						cleaning, Bitumen cleaning and Oil base mod, Barite and
						Bentoment slog, Pipeline fabrication, anode fabrication of
						storage tanks and maintenace.
					</p>
				</div>
			</div>

			<div className="border-2 border-black pt-3">
				<p className="m-auto w-[920px] min-w-64 text-lg text-justify">
					Phibest Global Services Limited provides services in the field of
					Civil and Fabrication Engineering, Bitumen cleaning and oil-based
					mud (OBM), Waste management, maintenance, welding, blasting and
					painting services. Tank cleaning is crucial in industrial
					settings such as manufacturing facilities, Refineries and Power
					plants. As Professional tank cleaning services, we have the
					necessary expertise and equipment to ensure thorough and safe
					cleaning.
				</p>

				<div className=" bg-[#D9D9FE] mt-8">
					<div className="m-auto w-[960px] min-w-64 grid grid-cols-3 items-center gap-y-4 py-10 pl-8">
						<img
							className="h-52 w-72 rounded-lg shadow-[#B0B0FD_0px_5px_15px] transition-all duration-200 ease-in-out hover:transform  hover:scale-110"
							src={Image3}
							alt=""
						/>

						<img
							className="h-52 w-72 rounded-lg shadow-[#B0B0FD_0px_5px_15px] transition-all duration-200 ease-in-out hover:transform  hover:scale-110"
							src={Image6}
							alt="Workers wearing safety gear pressure washing a large cylindrical industrial tank from both the ground and the top using high-pressure equipment"
							loading="lazy"
						/>
						<img
							className="h-52 w-72 rounded-lg shadow-[#B0B0FD_0px_5px_15px] transition-all duration-200 ease-in-out hover:transform  hover:scale-110"
							src={Image5}
							alt=""
						/>
						<img
							className="h-52 w-72 rounded-lg shadow-[#B0B0FD_0px_5px_15px] transition-all duration-200 ease-in-out hover:transform  hover:scale-110"
							src={IMG1}
							alt=""
						/>
						<img
							className="h-52 w-72 rounded-lg shadow-[#B0B0FD_0px_5px_15px] transition-all duration-200 ease-in-out hover:transform  hover:scale-110"
							src={Image1}
							alt=""
						/>
						<img
							className="h-52 w-72 rounded-lg shadow-[#B0B0FD_0px_5px_15px] transition-all duration-200 ease-in-out hover:transform  hover:scale-110"
							src={Image4}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
