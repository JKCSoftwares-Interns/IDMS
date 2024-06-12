import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const NavButton = ({ to, icon, label, color }) => {
	return (
		<NavLink
			className={({ isActive, isPending }) => {
				return isActive
					? color === 'error' 
						? "active mx-6 bg-red-100 rounded-lg p-px transition ease-out translate-y-1 scale-110 duration-300 "
						: "active mx-6 bg-blue-100 rounded-lg p-px transition ease-out translate-y-1 scale-110 duration-300 " 
					: isPending
					? "mx-6 pending transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 "
					: "mx-6 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 ";
			}}
			to={to}
		>
			<Button
				startIcon={icon}
				variant="text"
				color={color}
				sx={{ textTransform: "none", fontSize: 16 }}
			>
				{label}
			</Button>
		</NavLink>
	);
};

export default NavButton;
