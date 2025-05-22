/** @format */

import React from "react";
import Work1 from "/Images/work1.png";
import Work2 from "/Images/work2.png";
import Work3 from "/Images/work3.png";
import Work4 from "/Images/work4.png";

const WS3 = () => {
	return (
		<div className="md:m-auto md:max-w-[920px] m-auto max-w-[540px] mb-12 mx-4 ">
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
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div>
						<img
							className="h-52 w-72 rounded-lg"
							src={Work1}
							alt=""
							loading="lazy"
						/>
					</div>
					<div>
						<img
							className="h-52 w-72 rounded-lg"
							src={Work2}
							alt=""
							loading="lazy"
						/>
					</div>
					<div>
						<img
							className="h-52 w-72 rounded-lg"
							src={Work3}
							alt=""
							loading="lazy"
						/>
					</div>
					<div>
						<img
							className="h-52 w-72 rounded-lg"
							src={Work4}
							alt=""
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WS3;
