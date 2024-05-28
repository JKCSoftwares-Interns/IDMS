import { motion, AnimatePresence } from "framer-motion";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Sidebar from "./layouts/Sidebar";
import Routing from "./routes/router";

function App() {

	return (
		<div className="min-h-screen border flex flex-col relative">
			<Header />

			<div id="MainView" className="flex flex-grow min-h-full">
				<Sidebar />

				<AnimatePresence>
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
					className="w-full"
				>
					<Routing />
				</motion.div>
				</AnimatePresence>

			</div>

			<Footer/>
		</div>
	);
}

export default App;
