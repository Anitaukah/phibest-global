/** @format */

import React from "react";
import Image44 from "../assets/Images/image (44).png";
import IMG1 from "../assets/Images/image 1.png";
import Image45 from "../assets/Images/image (45).png";
import Image41 from "../assets/Images/image (41).png";
import Image46 from "../assets/Images/image (46).png";
import Image51 from "../assets/Images/image (51).png";
import Image47 from "../assets/Images/image (47).png";
import Image48 from "../assets/Images/image (48).png";
import Image52 from "../assets/Images/image (52).png";
import Image53 from "../assets/Images/image (53).png";
import Image55 from "../assets/Images/image (55).png";
import Image54 from "../assets/Images/image (54).png";

const WorkServices = () => {
	return (
		<div className="m-auto w-[960px] min-w-64 mt-24 ">
			<h1 className="text-2xl mb-4 font-normal ">
				Our Services include
			</h1>
			<div className="my-8" id="bitumen&oil">
				<h1 className="text-center text-2xl font-medium mb-5">
					Bitumen Cleaning and Oil Based Mud
				</h1>
				<p className="text-base text-justify mb-5">
					Bitumen Cleaning and Oil-based mud Cleaning are specialized
					processes that requires careful considerations. Bitumen is a
					sticky substance making cleaning challenging but here at Phibest
					Global services we help you take care of bitumen.
				</p>
				<div className="flex gap-8 ">
					<div className="relative">
						<img className="h-52 w-72" src={Image44} alt=""/>
						<p className="bg-[#0000FA] text-center py-3 text-white absolute  bottom-[0rem] w-full">
							Thermal Cleaning
						</p>
					</div>
					<div>
						<img
							className="h-[200px] w-72 rounded-t-lg"
							src={IMG1}
							alt=""
						/>
						<p className="bg-[#0000FA] text-center py-3 text-white">
							Thermal Cleaning
						</p>
					</div>
					<div>
						<img
							className="h-[200px] w-72 rounded-t-lg"
							src={Image45}
							alt=""
						/>
						<p className="bg-[#0000FA] text-center py-3 text-white">
							Chemical Cleaning
						</p>
					</div>
					<div>
						<img className="h-[200px] w-72 " src={Image41} alt="" />
						<p className="bg-[#0000FA] text-center py-3 text-white">
							Mechanical Cleaning
						</p>
					</div>
				</div>
			</div>

			<div className="my-24" id="vessel&tank">
				<h1 className="text-center text-2xl font-medium mb-5">
					Vessel and Storage Tank Cleaning
				</h1>
				<p className="text-base text-justify mb-5">
					As Professional Tank cleaning services, we have the necessary
					expertise and equipment to ensure thorough and safe cleaning. At
					Phibest Global, we offer both manual and automated cleaning.
				</p>
				<div className="flex gap-8">
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image46} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image51} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image47} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image48} alt="" />
					</div>
				</div>
			</div>

			<div className="my-24" id="barite&slug">
				<h1 className="text-center text-2xl font-medium mb-5">
					Barite and Bentonite Slug
				</h1>
				<p className="text-base text-justify mb-5">
					Barite and Bentonite are commonly used in drilling operations
					particularly in Oil and Gas exploration to control pressure and
					maintain drilling fluid properties.
				</p>
				<div className="flex gap-8">
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image52} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image53} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image55} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image54} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkServices;
