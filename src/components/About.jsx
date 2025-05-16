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
			{/* m-auto w-[920px] min-w-64 */}
			<div className="mx-auto max-w-2xl lg:max-w-none" id="About ">
				<div className="flex flex-col-reverse md:flex-row md:flex-shrink-0 md:justify-center gap-5">
					<div className=" bg-[#B0B0FD] w-80 h-48 md:w-96 md:h-64 rounded-lg mt-4 mb-16">
						<img
							className="w-80 h-48 rounded-lg ml-[2rem] mt-[2rem]"
							src={Image}
							alt="Three workers wearing safety gear cleaning the inside of a large industrial tank using brushes and a vacuum-like machine"
							loading="lazy"
						/>
					</div>

					<div className="">
						<div className="flex items-center justify-center gap-4">
							<div className="w-10 h-2 bg-[#0000FA] rounded-tl-lg rounded-bl-lg"></div>
							<h1 className="pb-4 font-bold text-4xl">About Us</h1>
							<div className="w-10 h-2 bg-[#0000FA] rounded-tr-lg rounded-br-lg"></div>
						</div>
						<p className="text-base text-justify">
							Phibest Global Services Limited is a company based in
							Nigeria providing services in Nigeria to oil and oil
							service companies for their offshore and onshore
							activities.
						</p>
					</div>
				</div>
				{/* md:grid-cols-2 pb-16 justify-items-center lg:items-center */}
				<div className="flex flex-col md:flex-row md:flex-shrink-0 gap-8 lg:justify-center ">
					<p className="text-justify text-base">
						We render services like Vessel tank cleaning/ Storage tank
						cleaning, Bitumen cleaning and Oil base mod, Barite and
						Bentoment slog, Pipeline fabrication, anode fabrication of
						storage tanks and maintenace.
					</p>
					<div className=" bg-[#F9B9BB] w-80 h-48 md:w-96 md:h-64rounded-lg ml-[2rem] mb-16">
						{/* ml-[-2rem] md:w-64 md:h-52  */}
						<img
							className="w-80 h-48 rounded-lg ml-[-2rem] mt-[2rem] "
							src={Image2}
							alt="Workers in high-visibility orange safety suits pressure washing a large asphalt surface in an industrial setting"
							loading="lazy"
						/>
					</div>
				</div>
				<div className="flex flex-col-reverse md:flex-row gap-14">
					{/* grid grid-cols-2 mb-16 gap-[150px] items-center */}
					<div className="w-80 h-48 md:w-96 md:h-64 bg-[#B0B0FD]  rounded-lg mb-16">
						<img
							className="w-80 h-48 rounded-lg ml-[2rem] mt-[2rem]"
							src={Image4}
							alt=""
							loading="lazy"
						/>
					</div>
					<p className="mt-[2rem] text-justify text-base">
						We render services like Vessel tank cleaning/ Storage tank
						cleaning, Bitumen cleaning and Oil base mod, Barite and
						Bentoment slog, Pipeline fabrication, anode fabrication of
						storage tanks and maintenace.
					</p>
				</div>
			</div>

			<div className=" pt-3">
				{/* m-auto w-[920px] min-w-64 */}
				<p className=" text-base text-justify">
					Phibest Global Services Limited provides services in the field of
					Civil and Fabrication Engineering, Bitumen cleaning and oil-based
					mud (OBM), Waste management, maintenance, welding, blasting and
					painting services. Tank cleaning is crucial in industrial
					settings such as manufacturing facilities, Refineries and Power
					plants. As Professional tank cleaning services, we have the
					necessary expertise and equipment to ensure thorough and safe
					cleaning.
				</p>

				<div className=" bg-[#D9D9FE] py-10 mt-8">
					{/* m-auto w-[960px] min-w-64  */}
					<div className="flex flex-col md:flex-row md:justify-between gap-8 md:mx-32">
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
					</div>
					<div className="flex flex-col md:flex-row md:justify-between gap-8 pt-10 md:mx-32">
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
