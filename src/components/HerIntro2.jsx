/** @format */

import React from "react";
import Image40 from "../assets/Images/image (40).png";
import Image5 from "../assets/Images/image-5.png";
import Image38 from "../assets/Images/image (38).png";

const HerIntro2 = () => {
	return (
		<div className="w-[1020px] md:w-[1366px] relative -top-5  ">
			<div className="grid justify-items-center md:flex md:justify-center gap-8 md:gap-4">
				<div className="p-5 bg-white rounded-3xl shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b] ">
					<img
						className="w-[700px] h-[500px] md:w-64 md:h-52 rounded-3xl "
						src={Image40}
						alt=""
					/>
					<div>
						<h1 className="font-bold text-2xl md:text-xl my-3">Tank Maintenance</h1>
						<p className="w-[650px] md:w-0 text-justify mb-4">
							Vessel/Storage tank cleaning are essential processes to
							maintain the integrity and safety of liquids stored in
							tanks.
						</p>
					</div>
				</div>
				<div className="p-5 bg-white rounded-3xl shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b]">
					<img
						className="w-[700px] h-[500px] md:w-72 md:h-52 rounded-3xl "
						src={Image5}
						alt=""
					/>
					<h1 className="font-bold text-2xl my-3">Bitumen Cleaning</h1>
					<p className="w-[650px] md:w-0 text-justify mb-4">
						Proper cleaning and disposal of Bitumen and OBM are crucial to
						ensuring a safe working environment and minimizing
						environmental impact
					</p>
				</div>
				<div className=" p-5 bg-white rounded-3xl shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b]">
					<img
						className="w-[700px] h-[500px] md:w-72 md:h-52  "
						src={Image38}
						alt=""
					/>
					<h1 className="font-bold text-2xl my-3">Waste Management</h1>
					<p className="w-[650px] md:w-56 text-justify mb-4">
						We can provide a variety of waste disposal and tanks treatment
						maintenance services from minor repairs to substantial
						reconstruction.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HerIntro2;
