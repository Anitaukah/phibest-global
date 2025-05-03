/** @format */

import React from "react";
import Image7 from "../assets/Images/image-7.png";
import Image9 from "../assets/Images/image-9.png";
import Image8 from "../assets/Images/image-8.png";
import Image12 from "../assets/Images/image 12.png";
import Image10 from "../assets/Images/image 10.png";
import Image11 from "../assets/Images/image 11.png";

const Statement = () => {
	return (
		<div className="m-auto w-[960px] min-w-64">
			<section className="my-8">
				<h1 className="text-center mt-5 pb-6">HSE Policy Statement</h1>
				<p className="py-4 mb-5">
					It is the philosophy of PHIBEST GLOBAL SERVICES LTD that
					accidents/injuries are preventable and therefore unacceptable in
					her operations.
				</p>
				<div className="grid grid-cols-3 gap-8 mt-6">
					<div className="bg-[#272626] text-white rounded-lg ">
						<h2>Health Policy</h2>

						<div className="mx-5">
							<ul className="list-disc">
								<li>
									Will promote and encourage good health to its
									employees
								</li>
								<li>
									Will conduct special investigations and examination
									where there is evidence of occupational ill health.
								</li>
								<li>
									Will observe and identify health hazards at work site
									and to communicate details of hazards / dangers to
									personnel as at when appropriate.
								</li>
							</ul>
						</div>
					</div>
					<div className="bg-[#272626] text-white rounded-lg">
						<h2>Environmental Policy</h2>
						<div className="mx-5">
							<ul className="list-disc">
								<li>
									Will promote, protect, encourage and create awareness
									for the preservation of the environment.
								</li>
								<li>
									Personnel are encouraged to pay appropriate regard to
									the environment by acting to preserve air, water,
									soil, plant and animal’s eyes from adverse effects of
									their actions.
								</li>
								<li>
									Responsibility to ensure that waste generated during
									the project shall be collected, handled, treated and
									disposed in such a way as not to have impact on the
									environment.
								</li>
							</ul>
						</div>
					</div>
					<div className="bg-[#272626] text-white rounded-lg">
						<h2>Safety Policy</h2>
						<div className="mx-5">
							<ul className="list-disc">
								<li>
									Will prevent unsafe acts/ conditions, personnel
									injuries and property damage of any description.
								</li>
								<li>
									Have a systematic approach to safety management
									designed to ensure compliance with the Law and to
									achieve continuous performance improvement.
								</li>
								<li>
									Will accomplish all projects in such a way as to
									portraying the utmost essentiality of safety in
									relation to operational and commercial objective.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<div>
				<h2 className="text-center mb-8 text-[#0000FA] font-bold text-2xl">More About Us</h2>

				<p className="mb-8">
					We also render various types of blasting and painting services to
					the Oil and Gas Industry, including Ultra High Pressure (UHP),
					Hydro Blasting and more traditional grit and steel ball blasting.
					All our coating systems are applied in accordance with the
					respective paint manufacturers specifications. This process is
					closely monitored throughout the coating application.
				</p>

				<div className="grid grid-cols-3">
					<img className="h-52 w-72 rounded-lg" src={Image7} alt="" />
					<img className="h-52 w-72 rounded-lg" src={Image9} alt="" />
					<img className="h-52 w-72 rounded-lg" src={Image8} alt="" />
				</div>
			</div>

			<div className="mt-8">
				<h2 className="py-10 font-bold text-2xl">Fabrication Optimum Maintenance services</h2>

				<div className="grid grid-cols-3">
					<img className="h-52 w-72 rounded-lg" src={Image12} alt="" />
					<img className="h-52 w-72 rounded-lg" src={Image10} alt="" />
					<img className="h-52 w-72 rounded-lg" src={Image11} alt="" />
				</div>
				<p className="my-8 w-96">
					Our maintenance service can cover any type of defects / anomalies
					/ deteriotation. The most typical is corrosions on the steel over
					a long time service.
				</p>
			</div>
		</div>
	);
};

export default Statement;
