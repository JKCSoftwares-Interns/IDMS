import React from "react";
import PlaceholderAvatar from "../assets/avatar.webp";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import NavButton from "../components/NavButton";
import Popover from "@mui/material/Popover";
import Avatar from "@mui/material/Avatar";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { motion } from "framer-motion";

const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<motion.div
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
			id="container"
			className="flex py-5 px-20 justify-between items-center bg-slate-100"
		>
			<div id="logo">
				<h1 className="text-3xl font-extrabold">
					i
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						DMS
					</span>
				</h1>
			</div>

			<div id="account" className="flex gap-10 items-center">
				<div id="about" className="flex gap-4 items-center">
					<Avatar alt="Mona Giovanna" src={PlaceholderAvatar} />
					<div className="flex flex-col">
						<h1 className="font-bold">Username</h1>
						<p className="text-slate-500">Admin</p>
					</div>
				</div>

				<div id="management" className="flex flex-col self-center">
					<IconButton onClick={handleClick}>
						<MoreVertIcon />
					</IconButton>
					<Popover
						open={open}
						anchorEl={anchorEl}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						sx={{ ".MuiPaper-root": { borderRadius: 2 } }}
					>
						<div className="flex flex-col bg-slate-100 gap-2 py-4">
							<NavButton
								to="/settings"
								icon={<TuneRoundedIcon />}
								label="Settings"
								color="info"
							/>
							<NavButton
								to="/help"
								icon={<ContactSupportRoundedIcon />}
								label="Get help"
								color="info"
							/>
							<NavButton
								to="/auth" // Change this to the logout route
								icon={<LogoutRoundedIcon />}
								label="Logout"
								color="error"
							/>
						</div>
					</Popover>
				</div>
			</div>
		</motion.div>
	);
};

export default Header;
