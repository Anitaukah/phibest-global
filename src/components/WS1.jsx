/** @format */

import React from "react";
import Image50 from "/Images/image (50).png";
import Image56 from "/Images/image (56).png";
import Image48 from "/Images/image (48).png";
import Img2 from "/Images/image-2[1].png";

const WS1 = () => {
	return (
		<div className="bg-[#FDE9E9] py-12 mb-12">
			<div
				className="md:m-auto md:max-w-[920px] m-auto max-w-[540px] mx-4"
				id="pipe&anode"
			>
				<h1 className="text-center text-2xl font-medium mb-5 ">
					Pipeline and Anode Fabrication
				</h1>
				<p className="text-base text-justify mb-5">
					Pipeline/Anode fabrication is the process of manufacturing
					pipelines which are used to transport fluids, gases, or other
					materials to over long distances. The processes includes: Design
					and planning, Material selection, Pipe manufacturing, Welding and
					joining, Coating and lining, Testing and inspection.
				</p>
				<div className="flex flex-col md:flex-row gap-8 items-center md:justify-between">
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image50} alt="" loading="lazy" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Img2} alt="" loading="lazy" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image56} alt="" loading="lazy"/>
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image48} alt="" loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WS1;
