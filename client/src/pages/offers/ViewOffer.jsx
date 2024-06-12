import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { Container } from "@mui/material";

import {serverInstance} from "../../services/backendUtils";
import { MuiTable } from "../../components/MuiTable";
import PageAnimate from "../../components/PageAnimate";

const tableFields = [
	{ key: "offerId", label: "Offer ID" },
	{ key: "offerName", label: "Offer Name" },
	{ key: "offerType", label: "Offer Type" },
	{ key: "startDate", label: "Start Date" },
	{ key: "endDate", label: "End Date" },
	{ key: "products", label: "Products" },
	{ key: "discountValue", label: "Discount Value" },
	{ key: "discountPercentage", label: "Discount Percentage" },
	// { key: "maximumDiscountValue", label: "Maximum Discount Value" },
	{ key: "minimumPurchase", label: "Minimum Purchase" },
	{
		key: "offerApplicabilityFrequency",
		label: "Offer Applicability Frequency",
	},
	{ key: "applicableTo", label: "Applicable To" },
	{ key: "status", label: "Status" },
	// { key: "dateAdded", label: "Date Added" },
	// { key: "addedBy", label: "Added By" },
	// { key: "lastEditedDate", label: "Last Edited Date" },
	// { key: "lastEditedBy", label: "Last Edited By" }
];

const ViewOffer = () => {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await serverInstance.get("/offers");
				
				const processedData = response.data.map(item => {
					const newItem = { ...item };
					tableFields.forEach(field => {
						if (!newItem[field.key]) {
							newItem[field.key] = 'N/A' || 0;
						}
					});
					return newItem;
				});

				setData(processedData);
			} catch (error) {
				console.error("Failed to fetch offers:", error);
			}
		};

		fetchData();
	}, []);

	const filteredData = data.filter((offer) =>
		offer.offerName && offer.offerName.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<PageAnimate className={"w-full"}>
			<Container sx={{ p: 2 }}>
				<div className="flex p-4 justify-evenly items-center w-full">
					<h1 className="text-4xl font-bold mb-4 text-center">
						View Offers
					</h1>
					<input
						className="px-4 py-2 border max-w-max rounded-lg"
						placeholder="Search Schemes/Offers..."
						type="text"
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
					<NavLink to="/offers/add">
						<Button size="large" variant="contained" color="success">
							<AddCircleIcon />
						</Button>
					</NavLink>
				</div>

				<MuiTable
					title={"offers"}
					tableFields={tableFields}
					tableData={filteredData}
					setTableData={setData}
				/>
			</Container>
		</PageAnimate>
	);
};

export default ViewOffer;