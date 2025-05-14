/** @format */

import React from "react";
import Image6 from "../assets/Images/image-6.png";

const WS3 = () => {
	return (
		<div className="w-full max-w-5xl mx-auto mb-12 ">
			<div className="my-8" id="clear&forward">
				
				<h1 className="text-center text-2xl font-medium mb-5 ">
					Clearing and Forwarding
				</h1>
				<p className="text-base text-justify mb-5">
					Phibest Global Services Limited have team of experts who
					specialize in clearing and forwarding of goods and services from
					service vessel, ship and airplane from different terminal across
					the nation with worth of experience.
				</p>
				<div className="flex gap-8">
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image6} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image6} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image6} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Image6} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WS3;
