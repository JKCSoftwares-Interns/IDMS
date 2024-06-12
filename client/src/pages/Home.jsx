import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
					layout
					initial={{
						translateY: "-100px",
					}}
					animate={{
						translateY: "0px",
					}}
					transition={{
						duration: 1,
						type: "spring",
					}}
					className="w-full bg-slate-100"
				>
			<div className="grid  place-items-center">
				<h1 className="text-3xl  text-emerald-500">Home Running</h1>
			</div>
		</motion.div>
	);
};

export default Home;
