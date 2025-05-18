/** @format */
// import "./App.js";

import React, { useEffect, useState } from "react";
// import "./App.css";
import Logo from "../assets/Images/logo.png";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// import Open from "../assets/Images/bars-solid.svg";
// import Close from "../assets/Images/circle-xmark-regular.svg";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
	}, [isOpen]);
	return (
		<nav
			className="bg-white md:m-auto md:max-w-[920px] m-auto max-w-[540px]"
			id="Home "
		>
			{/* w-full max-w-5xl mx-auto  */}
			{/* w-[920px] min-w-80 md:m-auto sm:max-w-[1040px] justify-between items-center mx-auto max-w-2xl lg:max-w-none*/}
			<div className="flex items-center justify-between bg-white ">
				<img
					className="w-28 h-16 md:w-28 md:h-16 ml-1 md:pl-0"
					src={Logo}
					alt="Phibest global company logo"
				/>
				{!isOpen && (
					<div
						onClick={toggleMenu}
						className="md:hidden cursor pointer mr-2"
					>
						<HiMenu size={30} />
					</div>
				)}

				{isOpen && (
					<div
						onClick={toggleMenu}
						className="md:hidden cursor pointer z-20 mr-4"
					>
						<IoClose size={30} />
					</div>
				)}

				{isOpen ? (
					<div className=" bg-white overflow-y-hidden fixed z-10 top-0 right-0 shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b] w-[250px] min-h-screen pt-12 pl-8 flex  flex-col gap-12 duration-300 ease-in text-lg">
						<ul className="">
							<li>
								<a
									href="/"
									className="hover:text-[#EB1E23] font-medium active:underline"
									target="_blank"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#About"
									className="hover:text-[#EB1E23] font-medium"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#Policy"
									className=" hover:text-[#EB1E23] font-medium"
								>
									Policy
								</a>
							</li>
							<li>
								<a
									href="/Service"
									target="_blank"
									className=" hover:text-[#EB1E23] font-medium active:underline"
								>
									Services
								</a>
							</li>
						</ul>
					</div>
				) : (
					<div className="bg-white overflow-y-hidden fixed z-10 top-0 right-[-150%] shadow-[0_3px_6px_#00000029,0_3px_6px_#0000003b] w-[250px] min-h-screen pt-3 pl-8 flex flex-col gap-4 duration-300 ease-in text-lg"></div>
				)}

				<div className="text-[18px] hidden md:block">
					<ul className="md:flex">
						<li>
							<a
								href="/"
								className="hover:text-[#EB1E23] font-medium"
								target="_blank"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#About"
								className="ml-20 hover:text-[#EB1E23] font-medium"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#Policy"
								className="ml-20 hover:text-[#EB1E23] font-medium"
							>
								Policy
							</a>
						</li>
						<li>
							<a
								href="/Service"
								target="_blank"
								className="ml-20 hover:text-[#EB1E23] font-medium active:underline"
							>
								Services
							</a>
						</li>
					</ul>
				</div>
				{/* */}
				{/* <div className="md:hidden block">
					<img className="w-24 h-8" src={Hamburger} alt="Menu icon" />
				</div> */}
			</div>
		</nav>
	);
};

export default Navbar;
