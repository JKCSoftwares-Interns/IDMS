import data from "../../../data.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const TransportList = () => {
	// const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await axios.get("/transport/show");
	// 			setData(response.data);
	// 		} catch (error) {
	// 			console.error("Failed to fetch transport:", error);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	const filteredData = data.filter((transport) =>
		transport.transportName.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="container mx-auto p-4">
			<div className="flex p-4 justify-between w-full border">
				<h1 className="text-4xl font-bold mb-4 text-center">Transport List</h1>
				<input
					className="p-2 border max-w-max rounded-lg"
					placeholder="Search Transport..."
					type="text"
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
				<button>
					<NavLink
						className="flex items-center text-slate-300 hover:text-slate-200 gap-5 bg-[#5e7bcc] hover:bg-green-700 p-2 rounded-md"
						to="/transport/add"
					>
						Add Transport
					</NavLink>
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full table-auto">
					<thead>
						<tr>
							<th className="border px-4 py-2">Transport ID</th>
							<th className="border px-4 py-2">Transport Name</th>
							<th className="border px-4 py-2">Business Name</th>
							<th className="border px-4 py-2">Vehicle Name</th>
							<th className="border px-4 py-2">Email</th>
							<th className="border px-4 py-2">Moblie Number</th>
							<th className="border px-4 py-2">Alternate Moblie Number</th>
							<th className="border px-4 py-2">Address Line 1</th>
							<th className="border px-4 py-2">Address Line 2</th>
							<th className="border px-4 py-2">Landmark</th>
							<th className="border px-4 py-2">City</th>
							<th className="border px-4 py-2">District</th>
							<th className="border px-4 py-2">State</th>
							<th className="border px-4 py-2">Pincode</th>
							<th className="border px-4 py-2">Branch Office</th>
							<th className="border px-4 py-2">Aadhar Number</th>
							<th className="border px-4 py-2">Pan Number</th>
							<th className="border px-4 py-2">Driver Name</th>
							<th className="border px-4 py-2">Driver Moblie Number</th>
							<th className="border px-4 py-2">Driver Alternate Mobile Number</th>
							<th className="border px-4 py-2">status</th>
							<th className="border px-4 py-2">Date added</th>
							<th className="border px-4 py-2">added by</th>
							<th className="border px-4 py-2">Last edited Date</th>
							<th className="border px-4 py-2">Last edited by</th>
							
						</tr>
					</thead>
					<tbody>
						{Array.isArray(filteredData) &&
							filteredData.map((transport) => (
								// {testdata.map((transport) => (
								<tr key={transport.transportId}>
									<td className="border px-4 py-2">{transport.transportId}</td>
									<td className="border px-4 py-2">{transport.transportName}</td>
									<td className="border px-4 py-2">{transport.businessName}</td>
									<td className="border px-4 py-2">{transport.vehicleName}</td>
									<td className="border px-4 py-2">{transport.email}</td>
									<td className="border px-4 py-2">{transport.mobileNumber}</td>
									<td className="border px-4 py-2">{transport.alternatemobileNumber}</td>
									<td className="border px-4 py-2">{transport.addressline1}</td>
									<td className="border px-4 py-2">{transport.addressline2}</td>
									<td className="border px-4 py-2">{transport.landmark}</td>
									<td className="border px-4 py-2">{transport.city}</td>
									<td className="border px-4 py-2">{transport.district}</td>
									<td className="border px-4 py-2">{transport.state}</td>
									<td className="border px-4 py-2">{transport.pincode}</td>
									<td className="border px-4 py-2">{transport.branchoffice}</td>
									<td className="border px-4 py-2">{transport.aadharNumber}</td>
									<td className="border px-4 py-2">{transport.panNumber}</td>
									<td className="border px-4 py-2">{transport.driverName}</td>
									<td className="border px-4 py-2">{transport.drivermobileNumber}</td>
									<td className="border px-4 py-2">{transport.driveralternateNumber}</td>
									<td className="border px-4 py-2">{transport.status}</td>
									<td className="border px-4 py-2">{transport.dateAdded}</td>
									<td className="border px-4 py-2">{transport.addedBy}</td>
									<td className="border px-4 py-2">{transport.lasteditedDate}</td>
									<td className="border px-4 py-2">{transport.lasteditedBy}</td>
									

									
					
									<td className="border px-4 py-2">
										<button>
											<NavLink
												className="flex items-center gap-5 text-slate-300 hover:text-slate-200 hover:bg-amber-700 bg-[#5e7bcc] p-2 rounded-md"
												to={`/transport/edit/${transport.transportId}`}
											>
												<span className="text-white-700 text-[1.2rem]">
													Edit
												</span>
											</NavLink>
										</button>
									</td>
									<td className="border px-4 py-2">
										<button
											className="flex items-center gap-5 text-slate-300 hover:text-slate-200 hover:bg-red-700 bg-[#5e7bcc] p-2 rounded-md"
											onClick={async () => {
												try {
													const response = await fetch(
														`/transport/delete/${transport.transportId}`,
														{ method: "DELETE" }
													);
													if (!response.ok) {
														throw new Error(
															`HTTP error! status: ${response.status}`
														);
													}
													window.location.reload();
												} catch (error) {
													console.error("Failed to delete transport:", error);
												}
											}}
										>
											<span className="text-white-700 text-[1.2rem]">
												Delete
											</span>
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TransportList;