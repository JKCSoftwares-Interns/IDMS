import { motion } from "framer-motion";
import NavButton from "../components/NavButton";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";

const Sidebar = () => {
	const BUTTON_COLOR = "primary";

	return (
		<motion.div
			initial={{
				translateX: "100px",
			}}
			animate={{
				translateX: "0px",
			}}
			transition={{
				duration: 1,
				type: "spring",
			}}
			className="flex flex-col border rounded-xl px-6 mb-5 py-4 gap-6"
		>
			<div className="flex flex-col gap-4 mt-3">
				<NavButton
					to="/"
					icon={<SpaceDashboardRoundedIcon />}
					label="Dashboard"
					color={BUTTON_COLOR}
				/>
				<NavButton
					to="/inventory"
					icon={<Inventory2RoundedIcon />}
					label="Inventory"
					color={BUTTON_COLOR}
				/>
				<NavButton
					to="/products"
					icon={<CategoryRoundedIcon />}
					label="Products"
					color={BUTTON_COLOR}
				/>
				<NavButton
					to="/suppliers"
					icon={<LocalShippingRoundedIcon />}
					label="Transport"
					color={BUTTON_COLOR}
				/>
				<NavButton
					to="/offers"
					icon={<LocalOfferRoundedIcon />}
					label="Offers"
					color={BUTTON_COLOR}
				/>
				<NavButton
					to="/reports"
					icon={<AssessmentRoundedIcon />}
					label="Reports"
					color={BUTTON_COLOR}
				/>
			</div>
		</motion.div>
	);
};

export default Sidebar;
