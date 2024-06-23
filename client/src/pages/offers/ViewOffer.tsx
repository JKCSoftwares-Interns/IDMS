import { FC, useEffect, useState } from "react";
import TableGenerator from "../../components/TableGeneration";
import { AddCircleRounded, SearchOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getAllData } from "../../data/basic";

/* Order to `labels` and `interface` should match. */

interface Offer {
	offerId: string;
    offerType: string;
    offerName: string;
    startDate: string;
    endDate: string;
    offers: string;
    discountValue: number;
    discountPercentage: number;
    maximumDiscountValue: number;
    minimumPurchase: number;
    offerApplicabilityFrequency: string;
    applicableTo: string;
    status: string;
    dateAdded: string;
    addedBy: string;
    lastEditedDate: string;
    lastEditedBy: string;
}

const labels = [
    "Offer ID",
    "Offer Type",
    "Offer Name",
    "Start Date",
    "End Date",
    "Offers",
    "Discount Value",
    "Discount Percentage",
    "Maximum Discount Value",
    "Minimum Purchase",
    "Offer Applicability Frequency",
    "Applicable To",
    "Status",
    "Date Added",
    "Added By",
    "Last Edited Date",
    "Last Edited By",
];

const ViewOffers: FC = () => {
	const [offers, setOffer] = useState<Offer[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response: Offer[] = await getAllData("/offers");
			setOffer(response);
			return response;
		};

		fetchData();
	}, []);

	return (
		<>
			{offers.length > 0 ? (
				<TableGenerator title="offers" label={labels} data={offers} setData={setOffer} />
			) : (
				<div className="w-full grid place-items-center">
					<div className="flex flex-col justify-center items-center gap-10">
						<SearchOff sx={{ fontSize: 150 }} />
						<h1 className="text-2xl">No offers found</h1>
						<NavLink to={`/offers/add`}>
						<div className="flex flex-col justify-center gap-3">
						<Button size="large" variant="contained" color="success">
							<AddCircleRounded />
						</Button>
						<p>Click to add Offers</p>
						</div>
					</NavLink>
					</div>
				</div>
			)}
		</>
	);
};

export default ViewOffers;
