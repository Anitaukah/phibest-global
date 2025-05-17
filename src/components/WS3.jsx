/** @format */

import React from "react";
import Work1 from "../assets/Images/work1.png";
import Work2 from "../assets/Images/work2.png";
import Work3 from "../assets/Images/work3.png";
import Work4 from "../assets/Images/work4.png";

const WS3 = () => {
	return (
		<div className="md:m-auto md:max-w-[920px] m-auto max-w-[540px] mb-12 m ">
			<div className="my-8 x-4" id="clear&forward">
				<h1 className="text-center text-2xl font-medium mb-5 ">
					Clearing and Forwarding
				</h1>
				<p className="text-base text-justify mb-5">
					Phibest Global Services Limited have team of experts who
					specialize in clearing and forwarding of goods and services from
					service vessel, ship and airplane from different terminal across
					the nation with worth of experience.
				</p>
				<div className="flex flex-col md:flex-row  gap-8">
					<div>
						<img className="h-52 w-72 rounded-lg" src={Work1} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Work2} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Work3} alt="" />
					</div>
					<div>
						<img className="h-52 w-72 rounded-lg" src={Work4} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WS3;
