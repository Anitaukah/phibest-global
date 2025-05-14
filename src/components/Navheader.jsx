/** @format */

import React from "react";
import Envelop from "../assets/Images/ic_baseline-email.png";
import Location from "../assets/Images/gridicons_location.png";
import Phone from "../assets/Images/material-symbols_call.png";

const Navheader = () => {
	return (
		<div className="bg-[#0000FA] hidden md:block">
			{/* w-full max-w-5xl mx-auto */}
			{/* md:m-auto md:w-[920px] min-w-64  */}
			<div className="w-full max-w-5xl mx-auto">
				<ul className="flex justify-between text-white py-4 text-sm">
					<li className=" flex items-center">
						<img className="w-6 h-7" src={Phone} alt="message icon" />
						+234 (0) 803 677 6697
					</li>
					<li className="hover:underline flex items-center">
						<img className="w-7 h-7" src={Envelop} alt="message icon" />
						<a href="mailto:phizek4life@gmail.com">
							phizek4life@gmail.com
						</a>{" "}
					</li>
					<li className=" flex items-center hover:underline">
						<img className="w-7 h-7" src={Envelop} alt="message icon" />
						<a href="mailto:phizek4life@yahoo.com">
							phizek4life@yahoo.com
						</a>
					</li>

					<li className="flex items-center">
						<span>
							<img
								className="w-6 h-7"
								src={Location}
								alt="message icon"
							/>
						</span>
						KM.3 Harbour Road <br /> Davo Plaza, By Njinna Hotel
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navheader;
