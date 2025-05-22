/** @format */

import React from "react";
import Envelop from "/Images/ic_baseline-email.png";
import Location from "/Images/gridicons_location.png";
import Phone from "/Images/material-symbols_call.png";

const Footer = () => {
	return (
		<div className="bg-[#272626] text-white p-8 mt-7">
			{/* w-full max-w-5xl mx-auto */}
			<div className="md:m-auto md:max-w-[920px] m-auto max-w-[540px]">
				<h1 className="text-base md:text-sm">
					Phibest Global Services Policies Includes;
				</h1>
				<div className="flex flex-col items-center md:flex-row md:justify-between text-base md:text-xs">
					<div className="flex flex-col md:flex-row gap-0 md:gap-8 mt-4">
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
						<div className="mt-4 md:mt-0">
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
					<div className="flex flex-col-reverse items-center md:justify-between md:flex-row md:gap-10 mt-4">
						<div className="mt-6">
							<ul>
								<li className="pb-1 hover:underline">
									<a href="#Home">Home</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#About">About</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#Policy">Policy</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="/Service" target="_blank">
										Services
									</a>
								</li>
							</ul>
						</div>
						<div className=" md:mt-0">
							<ul>
								<li className="flex items-center md:gap-2 gap-3 mb-2">
									<span>
										<img
											className="md:w-5 md:h-5 w-8 "
											src={Location}
											alt="message icon"
											loading="lazy"
										/>
									</span>
									KM.3 Harbour Road Davo Plaza, By Njinna Hotel
								</li>
								<li className=" flex items-center md:gap-2 gap-3 mb-2">
									<img
										className="md:w-5 md:h-5 w-6"
										src={Phone}
										alt="message icon"
										loading="lazy"
									/>
									+234 (0) 803 677 6697
								</li>
								<li className="hover:underline flex items-center md:gap-2 gap-3">
									<img
										className="md:w-5 md:h-5 w-6"
										src={Envelop}
										alt="message icon"
										loading="lazy"
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
