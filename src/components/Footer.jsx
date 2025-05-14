/** @format */

import React from "react";

const Footer = () => {
	return (
		<div className="bg-[#272626] text-white p-8 mt-7">
			<div className="m-auto w-[960px] min-w-64 ">
				<h1 className="text-sm">
					Phibest Global Services Policies Includes;
				</h1>
				<div className="flex justify-between text-xs ">
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
					<div className="flex gap-10">
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
								<li className="pb-1">
									KM.3 Harbour Road Davo Plaza, By Njinna Hotel
								</li>
								<li className="pb-1">+234 (0) 803 677 6697</li>
								<li className="pb-1 hover:underline">
									<a href="/">phibest@info.gmail.com</a>
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
