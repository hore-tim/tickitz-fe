import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Layout from "components/Layout";
import Sidebar from "components/Sidebar";

export default function Profile() {
	return (
		<Layout title={"Your Profile"}>
			<div className="">
				<Navbar />
				<div className="board-tab lg:hidden gap-x-20 border-b border-b-[#DEDEDE] flex md:justify-between md:px-20 px-5 pt-10">
					<div className="cursor-pointer flex flex-col gap-y-5">
						<p className="text-sm text-tickitz-darkTitle">Details Account</p>
						<span className="border-b-2 border-b-tickitz-primary w-full"></span>
					</div>
					<div className="cursor-pointer flex flex-col gap-y-5">
						<p className="text-sm text-[#AAAAAA]">Order History</p>
						<span className=""></span>
					</div>
				</div>
				<main className="bg-[#F5F6F8] flex lg:flex-row flex-col gap-x-5 gap-y-5 lg:px-20 px-5 py-10">
					<Sidebar isHistory={false} />
					<p className="lg:hidden font-semibold text-lg text-tickitz-darkTitle">Account Settings</p>
					<section className="bg-white lg:w-2/3 w-full flex flex-col rounded-md shadow-[0px,8px,32px,rgba(186,186,186,0.08)] py-12 gap-y-10">
						<div className="board-tab lg:flex gap-x-20 border-b border-b-[#DEDEDE] hidden px-8">
							<div className="cursor-pointer flex flex-col gap-y-5">
								<p className="text-lg text-tickitz-darkTitle">Account Settings</p>
								<span className="border-b-2 border-b-tickitz-primary w-full"></span>
							</div>
							<div className="cursor-pointer flex flex-col gap-y-5">
								<p className="text-lg text-[#AAAAAA]">Order History</p>
								<span className=""></span>
							</div>
						</div>
						<div className="details-information flex flex-col gap-y-5 pt-5 md:px-8 px-4">
							<div>
								<p className="text-tickitz-darkTitle">Details Information</p>
								<div className="divider h-[1px] w-full bg-[#DEDEDE]"></div>
							</div>
							<div className="lg:grid lg:grid-cols-2 flex flex-col gap-5">
								<div className="first-name-input flex flex-col gap-y-2">
									<label className="text-tickitz-basic">First Name</label>
									<input
										type="text"
										className="appearance-none focus:outline-none border border-[#DEDEDE] bg-[#FCFDFE] rounded p-4"
									/>
								</div>
								<div className="last-name-input flex flex-col gap-y-2">
									<label className="text-tickitz-basic">Last Name</label>
									<input
										type="text"
										className="appearance-none focus:outline-none border border-[#DEDEDE] bg-[#FCFDFE] rounded p-4"
									/>
								</div>
								<div className="email-input flex flex-col gap-y-2">
									<label className="text-tickitz-basic">E-mail</label>
									<input
										type="email"
										className="appearance-none focus:outline-none border border-[#DEDEDE] bg-[#FCFDFE] rounded p-4"
									/>
								</div>
								<div className="phone-input flex flex-col gap-y-2">
									<label className="text-tickitz-basic">Phone Number</label>
									<div className="flex">
										<div className="relative w-1/5">
											<select className="appearance-none focus:outline-none dropd text-[#4E4B66] bg-[#FCFDFE] py-4 lg:px-4 px-2 border border-r-transparent rounded-l-md w-full">
												<option value="+62">+62</option>
												<option value="+65">+65</option>
												<option value="+1">+1</option>
											</select>
											<div className="absolute top-[-15px] left-[66px] h-1/2 w-[1px] bg-[#DEDEDE] transform rotate-180 origin-bottom-left"></div>
										</div>
										<input
											type="tel"
											className="appearance-none focus:outline-none border border-[#DEDEDE] bg-[#FCFDFE] border-l-transparent rounded-r-md p-4 w-4/5"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="accounts-and-privacy flex flex-col gap-y-5 pt-5 md:px-8 px-4">
							<div>
								<p className="text-tickitz-darkTitle">Accounts and Privacy</p>
								<div className="divider h-[1px] w-full bg-[#DEDEDE]"></div>
							</div>
							<div className="flex lg:flex-row flex-col gap-y-5 gap-x-5">
								<div className="flex flex-col gap-y-2 lg:w-1/2">
									<label className="text-tickitz-basic">New Password</label>
									<div className="new-password relative">
										<input
											type="password"
											placeholder="Write your password"
											className="appearance-none focus:outline-none border border-[#DEDEDE] bg-[#FCFDFE] rounded p-4 w-full"
										/>
										<i className="bi bi-eye text-xl text-[#A0A3BD] absolute top-[15px] right-[10px]"></i>
									</div>
								</div>
								<div className="flex flex-col gap-y-2 lg:w-1/2">
									<label className="text-tickitz-basic">Confirm Password</label>
									<div className="confirm-password relative">
										<input
											type="password"
											placeholder="Confirm your password"
											className="appearance-none focus:outline-none border border-[#DEDEDE] bg-[#FCFDFE] rounded p-4 w-full"
										/>
										<i className="bi bi-eye text-xl text-[#A0A3BD] absolute top-[15px] right-[10px]"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:w-1/2 md:px-8 px-4">
							<button className="btn normal-case border-transparent bg-tickitz-primary text-white hover:text-tickitz-primary w-full">
								Update Changes
							</button>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		</Layout>
	);
}
