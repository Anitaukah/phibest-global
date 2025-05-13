/** @format */

import React from "react";

const Navheader = () => {
	return (
		<div className="bg-[#0000FA] hidden md:block">
			<div className="md:m-auto md:w-[920px] min-w-64 border border-black">
				<ul className="flex justify-between text-white py-4 text-sm">
					<li>+234 (0) 803 677 6697</li>
					<li className="hover:underline">
						<a href="mailto:phizek4life@gmail.com">
							phizek4life@gmail.com
						</a>{" "}
					</li>
					<li className="hover:underline">
						<a href="mailto:phizek4life@yahoo.com">
							phizek4life@yahoo.com
						</a>
					</li>
					<li>KM.3 Harbour Road Davo Plaza, By Njinna Hotel</li>
				</ul>
			</div>
		</div>
	);
};

export default Navheader;
