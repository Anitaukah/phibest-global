/** @format */

import React from "react";

const Policy = () => {
	return (
		<div className="m-auto w-[960px] min-w-64">
			<section className="my-8" id="Policy">
				<div className="flex items-center justify-between">
					<div className="w-32 h-2 bg-[#0000FA] rounded-tl-lg rounded-bl-lg"></div>
					<h1 className="text-center mt-5 pb-6 font-bold text-4xl">
						HSE Policy Statement Hell
					</h1>
					<div className="w-32 h-2 bg-[#0000FA] rounded-tr-lg rounded-br-lg"></div>
				</div>

				<p className="py-4 mb-5 ">
					It is the philosophy of Phibest Global Services Limited that
					accidents/injuries are preventable and therefore unacceptable in
					her operations.
				</p>
				<div className="grid grid-cols-3 gap-8 mt-6">
					<div className="bg-[#272626] text-white rounded-lg ">
						<div></div>
						<h2 className="mx-5 my-4 text-center font-bold text-xl">Health Policy</h2>

						<div className="">
							<ul className="list-disc mx-9">
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
					<div className="bg-[#272626] text-white rounded-lg ">
						<h2 className="mx-5 my-4 text-center font-bold text-xl">Environmental Policy</h2>
						<div className="">
							<ul className="list-disc mx-9 mb-8">
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
						<h2 className="mx-5 my-4 text-center font-bold text-xl">Safety Policy</h2>
						<div className="">
							<ul className="list-disc mx-9">
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
		</div>
	);
};

export default Policy;
