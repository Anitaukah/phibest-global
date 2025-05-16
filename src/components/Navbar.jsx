/** @format */

import React from "react";
import Logo from "../assets/Images/logo.png";
import Hamburger from "../assets/Images/bars-solid.svg";

const Navbar = () => {
	return (
		<nav className="bg-white relative " id="Home ">
			{/* w-full max-w-5xl mx-auto  */}
			{/* w-[920px] min-w-80 md:m-auto sm:max-w-[1040px] justify-between items-center mx-auto max-w-2xl lg:max-w-none*/}
			<div className="flex items-center justify-between bg-white ">
				<img
					className="w-28 h-16 md:w-28 md:h-16 pl-8 md:pl-0"
					src={Logo}
					alt="Phibest global company logo"
				/>
				{/* md:block */}
				<div className="text-[18px] hidden md:block">
					<ul className="md:flex">
						<li>
							<a
								href="/"
								className="hover:text-[#EB1E23] hover:font-medium"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#About"
								className="ml-20 hover:text-[#EB1E23] hover:font-medium"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#Policy"
								className="ml-20 hover:text-[#EB1E23] hover:font-medium"
							>
								Policy
							</a>
						</li>
						<li>
							<a
								href="/Service"
								target="_blank"
								className="ml-20 hover:text-[#EB1E23] hover:font-medium active:underline"
							>
								Services
							</a>
						</li>
					</ul>
				</div>
				{/* */}
				<div className="md:hidden block">
					<img className="w-24 h-8" src={Hamburger} alt="Menu icon" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
