import { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {

	const [popDown, setPopDown] = useState(true);

	return (
		<motion.div
					initial={{
						translateY: "100px",
					}}
					animate={{
						translateY: popDown ? "0px" : "100px",
					}}
					transition={{
						duration: 1,
						type: "spring",
					}}
			onClick={() => setPopDown(!popDown)}
			className="flex-wrap bottom-0 min-w-full flex py-5 px-12 justify-between items-center text-slate-500 rounded-lg border"
		>
			<a href="">Privacy Policy</a>
			<p>© 2023 JKC Softwares, LLP.</p>
			<a href="">Terms & Conditions</a>
		</motion.div>
	);
}

export default Footer;
