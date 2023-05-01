import Image from "next/image";

//* temporary
import asuka from "assets/images/asuka.webp";

import starIcon from "assets/icons/star-icon.png";

export default function Sidebar(props) {
	return (
		<section className={`bg-white lg:w-1/3 w-full ${props.isHistory ? "hidden lg:flex" : "flex"} flex-col rounded-md shadow-[0px,8px,32px,rgba(186,186,186,0.08)] md:px-8 px-4 py-12 gap-y-5`}>
			<div className="flex items-center justify-between">
				<p className="text-tickitz-basic">INFO</p>
				<i className="bi bi-three-dots text-tickitz-primary text-[1.75rem] cursor-pointer"></i>
			</div>
			<figure className="relative overflow-hidden mx-auto h-[136px] w-[136px] rounded-full shadow-[0px_8px_16px_rgba(73,83,99,0.24)]">
				<Image
					alt="your profile photo"
					src={asuka}
					fill={true}
					priority
					sizes="136px"
					className="object-cover object-center"
				/>
			</figure>
			<div className="flex flex-col items-center gap-y-3">
				<p className="font-semibold text-xl text-tickitz-darkTitle">Asuka Shoryu</p>
				<p className="text-sm text-tickitz-basic">Moviegoers</p>
			</div>
			<div className="divider h-[1px] bg-[#DEDEDE]"></div>
			<div className="flex flex-col lg:px-20 px-2 gap-y-5">
				<p className="font-semibold text-tickitz-basic">Loyalty Points</p>
				<div className="achievement-card-bg bg-cover bg-center bg-no-repeat relative w-[248px] h-[173px] self-center">
					<div className="flex flex-col gap-y-5">
						<p className="font-bold text-lg text-white ml-4 mt-4">Moviegoers</p>
						<p className="font-semibold text-lg text-white ml-4">
							320 <span className="font-normal text-[0.625rem]">points</span>
						</p>
						<Image alt="star icon" src={starIcon} className="absolute top-[10px] right-[10px]" />
					</div>
				</div>
				<div>
					<p className="text-tickitz-basic text-center">180 points become a master</p>
					<progress className="progress" value={40} max={100}></progress>
				</div>
			</div>
		</section>
	);
}
