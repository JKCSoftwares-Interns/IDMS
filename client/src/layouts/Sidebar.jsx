// import { motion } from "framer-motion";
// import NavButton from "../components/NavButton";
// import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
// import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
// import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
// import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
// import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
// import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
// import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';

// const Sidebar = () => {
//     const BUTTON_COLOR = "primary";

//     const navButtons = [
//         {
//             to: "/",
//             icon: <SpaceDashboardRoundedIcon />,
//             label: "Dashboard",
//         },
//         {
//             to: "/inventory",
//             icon: <Inventory2RoundedIcon />,
//             label: "Inventory",
//         },
//         {
//             to: "/products",
//             icon: <CategoryRoundedIcon />,
//             label: "Products",
//         },
//         {
//             to: "/vendors",
//             icon: <StorefrontRoundedIcon />,
//             label: "Vendors",
//         },
//         {
//             to: "/transport",
//             icon: <LocalShippingRoundedIcon />,
//             label: "Transport",
//         },
//         {
//             to: "/offers",
//             icon: <LocalOfferRoundedIcon />,
//             label: "Offers",
//         },
//         {
//             to: "/reports",
//             icon: <AssessmentRoundedIcon />,
//             label: "Reports",
//         },
//     ];

//     return (
//         <motion.div
//             initial={{
//                 translateX: "100px",
//             }}
//             animate={{
//                 translateX: "0px",
//             }}
//             transition={{
//                 duration: 1,
//                 type: "spring",
//             }}
//             className="flex flex-col border rounded-xl px-6 mb-5 py-4 gap-6 backdrop-filter backdrop-blur-lg bg-white bg-opacity-90"
//         >
//             <div className="flex flex-col gap-4 mt-3">
//                 {navButtons.map((button, index) => (
//                     <NavButton
//                         key={index}
//                         to={button.to}
//                         icon={button.icon}
//                         label={button.label}
//                         color={BUTTON_COLOR}
//                     />
//                 ))}
//             </div>
//         </motion.div>
//     );
// };

// export default Sidebar;














import { useState } from "react";
import { motion } from "framer-motion";
import NavButton from "../components/NavButton";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

const Sidebar = () => {
    const BUTTON_COLOR = "primary";
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        // setAnchorEl(anchorEl ? null : event.currentTarget);
        setAnchorEl(!anchorEl);
        console.log(anchorEl);
    };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    const navButtons = [
        // ...existing buttons
        {
            to: "/",
            icon: <SpaceDashboardRoundedIcon />,
            label: "Dashboard",
        },
        {
            to: "/inventory",
            icon: <Inventory2RoundedIcon />,
            label: "Inventory",
        },
        {
            to: "/products",
            icon: <CategoryRoundedIcon />,
            label: "Products",
        },
        {
            to: "/vendors",
            icon: <StorefrontRoundedIcon />,
            label: "Vendors",
        },
        {
            to: "/transport",
            icon: <LocalShippingRoundedIcon />,
            label: "Transport",
        },
        {
            to: "/offers",
            icon: <LocalOfferRoundedIcon />,
            label: "Offers",
        },
        {
            to: "/reports",
            icon: <AssessmentRoundedIcon />,
            label: "Reports",
        },
        {
            to: "/supplier",
            icon: <LocalShippingIcon />,
            label: "Supplier",
        },
        {
            to: "/user",
            icon: <ManageAccountsIcon />,
            label: "User",
        },
        {
            to: "/taxation",
            icon: <TaxiAlertIcon />,
            label: "Taxation",
        },
        {
            to: "/billing",
            icon: <PaymentIcon />,
            label: "Billing",
        },
        // {
        //     to: "#",
        //     icon: <MoreHorizIcon />,
        //     label: "More Options",
        //     onClick: handleClick,
        // }
    ];

    // const moreOptions = [
    //     {
    //         to: "/products",
    //         icon: <StorefrontRoundedIcon />,
    //         label: "Supplier",
    //     },
    //     {
    //         to: "/user",
    //         icon: <StorefrontRoundedIcon />,
    //         label: "User",
    //     },
    //     {
    //         to: "/taxation",
    //         icon: <StorefrontRoundedIcon />,
    //         label: "Taxation",
    //     },
    //     {
    //         to: "/billing",
    //         icon: <StorefrontRoundedIcon />,
    //         label: "Billing",
    //     },
    //     // add more options here
    // ];

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
            className="flex flex-col border rounded-xl px-6 mb-5 py-4 gap-6 backdrop-filter backdrop-blur-lg bg-white bg-opacity-90"
        >
            <div className="flex flex-col gap-4 mt-3">
                {navButtons.map((button, index) => (
                    <NavButton
                        key={index}
                        to={button.to}
                        icon={button.icon}
                        label={button.label}
                        color={BUTTON_COLOR}
                        onClick={button.onClick}
                    />
                ))}
                {/* <NavButton
                    to="#"
                    icon={<MoreHorizIcon />}
                    
                    color={BUTTON_COLOR}
                    

                /> */}
                {/* <div
                    onClick={handleClick}
                >   {anchorEl ? (
                    moreOptions.map((option, index) => (
                        <div key={index}>
                            <NavButton
                                to={option.to}
                                icon={option.icon}
                                label={option.label}
                                color={BUTTON_COLOR}
                            />
                        </div>
                    ))) 

                    :
                    null}
                </div> */}

            </div>
        </motion.div>
    );
};

export default Sidebar;