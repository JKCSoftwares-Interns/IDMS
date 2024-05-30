import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const NavButton = ({ to, icon, label, color }) => {
	return (
		<NavLink className="mx-6" to={to}>
			<Button
				startIcon={icon}
				variant="text"
        activeClassName="active-link"
				color={color}
				sx={{ textTransform: "none", fontSize: 16 }}
			>
				{label}
			</Button>
		</NavLink>
	);
};

export default NavButton;