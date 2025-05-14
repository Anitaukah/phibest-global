/** @format */

import React from "react";

const FooterServices = () => {
	return (
		<div className="bg-[#272626] text-white p-8 mt-7">
			<div className="w-full max-w-5xl mx-auto  ">
				<h1 className="text-base">Phibest Global Services Include</h1>
				<div className="flex justify-between text-base ">
					<div className="flex gap-8 mt-2">
						<div>
							<ul>
								<li className="pb-1 hover:underline">
									<a href="#bitumen&oil">
										Bitumen Cleaning and Oil Based Mud
									</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#vessel&tank">
										Vessel and Storage Tank Cleaning
									</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#barite&slug">Barite and Bentonite Slug</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#pipe&anode">
										Pipeline and Anode Fabrication
									</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#clear&forward">Clearing and Forwarding</a>
								</li>
							</ul>
						</div>
					</div>
                    <div className="grid">
							<ul>
                            <li className="pb-1 hover:underline">
									<a href="/">Home</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#About">About Us</a>
								</li>
								<li className="pb-1 hover:underline">
									<a href="#Policy">Policy</a>
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
	);
};

export default FooterServices;
