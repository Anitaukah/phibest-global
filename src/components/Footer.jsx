/** @format */

import React from "react";
import Envelop from "../assets/Images/ic_baseline-email.png";
import Location from "../assets/Images/gridicons_location.png";
import Phone from "../assets/Images/material-symbols_call.png";

const Footer = () => {
	return (
		<div className="bg-[#272626] text-white p-8 mt-7">
			{/* w-full max-w-5xl mx-auto */}
			<div className="  ">
				<h1 className="text-sm">
					Phibest Global Services Policies Includes;
				</h1>
				<div className="flex flex-col md:justify-between text-xs ">
					<div className="flex gap-8 mt-2">
						<div>
							<ul>
								<li className="pb-1">Emergency Response Policy</li>
								<li className="pb-1">Security Policy</li>
								<li className="pb-1">Transportation Policy</li>
								<li className="pb-1">Waste Management Policy</li>
								<li className="pb-1">
									Crew Change/Outstation Management Policy
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<li className="pb-1">Access Policy</li>
								<li className="pb-1">
									Statement Occupational Health Policy
								</li>
								<li className="pb-1">Equipment Maintenance Policy</li>
								<li className="pb-1">
									Personal Protective Equipment Policy
								</li>
								<li className="pb-1">
									Training & Manpower Development Policy
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col md:flex gap-10">
						<div className="grid">
							<ul>
								<li className="pb-1 hover:underline">
									<a href="#Home">Home</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#About">About Us</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#Policy">Policy</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="/Service">Services</a>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<li className="flex items-center gap-2 mb-2">
									<span>
										<img
											className="w-5 h-5"
											src={Location}
											alt="message icon"
										/>
									</span>
									KM.3 Harbour Road Davo Plaza, By Njinna Hotel
								</li>
								<li className=" flex items-center gap-2 mb-2">
									<img
										className="w-5 h-5"
										src={Phone}
										alt="message icon"
									/>
									+234 (0) 803 677 6697
								</li>
								<li className="hover:underline flex items-center gap-2">
									<img
										className="w-5 h-5"
										src={Envelop}
										alt="message icon"
									/>
									<a href="mailto:phizek4life@gmail.com">
										phizek4life@gmail.com
									</a>{" "}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
