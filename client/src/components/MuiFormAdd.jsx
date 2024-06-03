// import serverInstance from "../services/serverInstance";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Box, TextField } from "@mui/material";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";

// const MuiFormAdd = ({ title, categories, fields }) => {

// 	const [open, setOpen] = useState(false);

// 	const navigate = useNavigate();

// 	const [formData, setFormData] = useState(
// 		fields.reduce((obj, item) => ({ ...obj, [item.name]: "" }), {})
// 	);

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({
// 			...formData,
// 			[name]: value,
// 		});
// 	};

// 	const handleSubmit = async (e) => {
// 		console.log("working on some lvl");

// 		e.preventDefault();
// 		const finalData = {
// 			...formData,
// 			addedBy: "admin", //will be fetching username here
// 		};

// 		console.log("Form submitted:", finalData); //for debugging

// 		const url = `/${title}/add`;
// 		console.log("URL:", url); //for debugging

// 		await serverInstance
// 			.post(`/${title}/add`, finalData)
// 			.then((response) => {
// 				console.log("Success:", response.data);
// 				setOpen(true);
// 			})
// 			.catch((error) => {
// 				console.error("Error:", error);
// 				setOpen(true);
// 			});
// 	};

// 	return (
// 		<>
// 			<Snackbar
// 				open={open}
// 				autoHideDuration={1000}
// 				onClose={() => {
// 					setOpen(false);
// 					navigate(`/${title}`);
// 				}}
// 				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
// 			>
// 				<Alert
// 					onClose={() => {
// 						setOpen(false);
// 						navigate(`/${title}`);
// 					}}
// 					severity="success"
// 					sx={{ width: "100%" }}
// 				>
// 					Product added successfully!
// 				</Alert>
// 			</Snackbar>

// 			<form className="w-3/4 grid grid-cols-2 grid-rows-2 gap-4">
// 				{categories.map((category) => (
// 					<div
// 					className={`${categories.length % 2 === 0 ? 'row-span-5' : 'col-span-2'} p-8 border rounded-2xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-90`}
// 						key={category}
// 					>
// 						<h1 className="text-xl mb-4 font-bold">{category}</h1>
// 						{fields
//     .filter((field) => field.category === category)
//     .map((field) => (
//         <Box padding={1} key={field.name}>
//             {field.type === 'date' ? (
//                 <TextField
//                     id={field.name}
//                     name={field.name}
//                     label={null}
//                     type={field.type}
//                     value={formData[field.name]}
//                     onChange={handleChange}
//                     variant="outlined"
//                     fullWidth
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                     inputProps={{ 
//                         min: 0,
//                         placeholder: field.label,
//                     }}
//                 />
//             ) : (
//                 <TextField
//                     id={field.name}
//                     name={field.name}
//                     label={field.label}
//                     type={field.type}
//                     value={formData[field.name]}
//                     onChange={handleChange}
//                     variant="outlined"
//                     fullWidth
//                     inputProps={{ min: 0 }}
//                 />
//             )}
//         </Box>
//     ))}
// 					</div>
// 				))}
// 			</form>

// 			<Button
// 				type="submit"
// 				variant="contained"
// 				sx={{
// 					mt: 5,
// 					width: "60%",
// 					backgroundColor: "green",
// 					p: 2,
// 					fontWeight: "bold",
// 					"&:hover": {
// 						backgroundColor: "darkgreen",
// 					},
// 				}}
// 				onClick={handleSubmit}
// 			>
// 				Add to stock
// 			</Button>
// 		</>
// 	);
// };

// export default MuiFormAdd;









// import React, { useState } from 'react';
// import { Box, TextField, Button, IconButton, Snackbar, Alert } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import DeleteIcon from '@mui/icons-material/Delete';
// import serverInstance from "../services/serverInstance";
// import { useNavigate } from "react-router-dom";

// const MuiFormAdd = ({ title, categories, fields, goodsCategories = [] }) => {
//     const [open, setOpen] = useState(false);
//     const [formData, setFormData] = useState(fields.reduce((obj, item) => ({ ...obj, [item.name]: "" }), {}));
//     const [goodsSections, setGoodsSections] = useState([]);
//     const navigate = useNavigate();

//     const handleChange = (e, sectionId = 0) => {
//         const { name, value } = e.target;
//         const key = sectionId === 0 ? name : `${name}_${sectionId}`;
//         setFormData({ ...formData, [key]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const finalData = { ...formData, addedBy: "admin" };
//         const url = `/${title}/add`;

//         try {
//             await serverInstance.post(url, finalData);
//             setOpen(true);
//         } catch (error) {
//             console.error("Error:", error);
//             setOpen(true);
//         }
//     };

//     const addAnotherGoodsSection = () => {
//         setGoodsSections([...goodsSections, goodsSections.length]);
//     };

//     const removeGoodsSection = (index) => {
//         const newGoodsSections = goodsSections.filter((_, i) => i !== index);
//         setGoodsSections(newGoodsSections);

//         const newFormData = { ...formData };
//         fields.filter(field => field.category === "Add Goods").forEach(field => {
//             delete newFormData[`${field.name}_${index}`];
//         });
//         setFormData(newFormData);
//     };

//     const renderFields = (category, sectionId = 0, useGridLayout = false) => (
//         <Box
//             sx={{
//                 display: 'grid',
//                 gridTemplateColumns: useGridLayout ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)',
//                 gap: 2
//             }}
//         >
//             {fields.filter(field => field.category === category).map((field, fieldIndex) => (
//                 <TextField
//                     key={`${category}-${sectionId}-${fieldIndex}`}
//                     id={sectionId === 0 ? field.name : `${field.name}_${sectionId}`}
//                     name={field.name}
//                     label={field.label}
//                     type={field.type}
//                     value={formData[sectionId === 0 ? field.name : `${field.name}_${sectionId}`]}
//                     onChange={(e) => handleChange(e, sectionId)}
//                     variant="outlined"
//                     fullWidth
//                     InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
//                     inputProps={field.type === 'number' ? { min: 0 } : {}}
//                 />
//             ))}
//         </Box>
//     );

//     return (
//         <>
//             <Snackbar
//                 open={open}
//                 autoHideDuration={1000}
//                 onClose={() => {
//                     setOpen(false);
//                     navigate(`/${title}`);
//                 }}
//                 anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//             >
//                 <Alert
//                     onClose={() => {
//                         setOpen(false);
//                         navigate(`/${title}`);
//                     }}
//                     severity="success"
//                     sx={{ width: "100%" }}
//                 >
//                     Product added successfully!
//                 </Alert>
//             </Snackbar>

//             <form onSubmit={handleSubmit} className="w-3/4 flex flex-col gap-4">
//                 {categories.map((category, index) => (
//                     <div className="p-8 border rounded-2xl bg-white bg-opacity-90" key={index}>
//                         <h1 className="text-xl mb-4 font-bold">{category}</h1>
//                         {renderFields(category, 0, goodsCategories.includes(category))}
//                     </div>
//                 ))}

//                 {title === "Goods Entry" && goodsSections.map((section, index) => (
//                     <div className="p-8 border rounded-2xl bg-white bg-opacity-90" key={`add-goods-${index}`}>
//                         <Box display="flex" justifyContent="space-between" alignItems="center">
//                             <h1 className="text-xl mb-4 font-bold">Add Goods {index + 1}</h1>
//                             <IconButton onClick={() => removeGoodsSection(index)} color="secondary">
//                                 <DeleteIcon />
//                             </IconButton>
//                         </Box>
//                         {renderFields("Add Goods", index, true)}
//                     </div>
//                 ))}

//                 {title === "Goods Entry" && (
//                     <Box display="flex" justifyContent="center" mt={2}>
//                         <Button
//                             onClick={addAnotherGoodsSection}
//                             variant="contained"
//                             color="primary"
//                             startIcon={<AddCircleOutlineIcon />}
//                         >
//                             Add More Goods
//                         </Button>
//                     </Box>
//                 )}

//                 <Box display="flex" justifyContent="center" mt={5}>
//                     <Button
//                         type="submit"
//                         variant="contained"
//                         sx={{
//                             width: "60%",
//                             backgroundColor: "green",
//                             p: 2,
//                             fontWeight: "bold",
//                             "&:hover": {
//                                 backgroundColor: "darkgreen",
//                             },
//                         }}
//                         className='t'
//                     >
//                         Add to stock
//                     </Button>
//                 </Box>
//             </form>
//         </>
//     );
// };

// export default MuiFormAdd;














// import React, { useState } from 'react';
// import { Box, TextField, Button, IconButton, Snackbar, Alert } from '@mui/material';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import DeleteIcon from '@mui/icons-material/Delete';
// import serverInstance from "../services/serverInstance";
// import { useNavigate } from "react-router-dom";

// const MuiFormAdd = ({ title, categories, fields, goodsCategories = [] }) => {
//     const [open, setOpen] = useState(false);
//     const [formData, setFormData] = useState(fields.reduce((obj, item) => ({ ...obj, [item.name]: "" }), {}));
//     const [goodsSections, setGoodsSections] = useState([]);
//     const navigate = useNavigate();

//     const handleChange = (e, sectionId = 0) => {
//         const { name, value } = e.target;
//         const key = sectionId === 0 ? name : `${name}_${sectionId}`;
//         setFormData({ ...formData, [key]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const finalData = { ...formData, addedBy: "admin" };
//         const url = `/${title}/add`;

//         try {
//             await serverInstance.post(url, finalData);
//             setOpen(true);
//         } catch (error) {
//             console.error("Error:", error);
//             setOpen(true);
//         }
//     };

//     const addAnotherGoodsSection = () => {
//         setGoodsSections([...goodsSections, goodsSections.length]);
//     };

//     const removeGoodsSection = (index) => {
//         const newGoodsSections = goodsSections.filter((_, i) => i !== index);
//         setGoodsSections(newGoodsSections);

//         const newFormData = { ...formData };
//         fields.filter(field => field.category === "Add Goods").forEach(field => {
//             delete newFormData[`${field.name}_${index}`];
//         });
//         setFormData(newFormData);
//     };

//     const renderFields = (category, sectionId = 0, useGridLayout = false) => (
//         <Box
//             sx={{
//                 display: 'grid',
//                 gridTemplateColumns: useGridLayout ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)',
//                 gap: 2
//             }}
//         >
//             {fields.filter(field => field.category === category).map((field, fieldIndex) => (
//                 <TextField
//                     key={`${category}-${sectionId}-${fieldIndex}`}
//                     id={sectionId === 0 ? field.name : `${field.name}_${sectionId}`}
//                     name={field.name}
//                     label={field.label}
//                     type={field.type}
//                     value={formData[sectionId === 0 ? field.name : `${field.name}_${sectionId}`]}
//                     onChange={(e) => handleChange(e, sectionId)}
//                     variant="outlined"
//                     fullWidth
//                     InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
//                     inputProps={field.type === 'number' ? { min: 0 } : {}}
//                 />
//             ))}
//         </Box>
//     );

//     return (
//         <>
//             <Snackbar
//                 open={open}
//                 autoHideDuration={1000}
//                 onClose={() => {
//                     setOpen(false);
//                     navigate(`/${title}`);
//                 }}
//                 anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//             >
//                 <Alert
//                     onClose={() => {
//                         setOpen(false);
//                         navigate(`/${title}`);
//                     }}
//                     severity="success"
//                     sx={{ width: "100%" }}
//                 >
//                     Product added successfully!
//                 </Alert>
//             </Snackbar>

//             <form onSubmit={handleSubmit} className="w-3/4 flex flex-col gap-4">

//                 {categories.map((category, index) => (
//                     <div className="p-8 border rounded-2xl bg-white bg-opacity-90" key={index}>
//                         <h1 className="text-xl mb-4 font-bold">{category}</h1>
//                         {renderFields(category, 0, goodsCategories.includes(category))}
//                     </div>
//                 ))}
                

//                 {/* Additional Goods Sections */}
//                 {goodsSections.map((section, index) => (
//                     <div className="p-8 border rounded-2xl bg-white bg-opacity-90 mt-4" key={`add-goods-${index}`}>
//                         <Box display="flex" justifyContent="space-between" alignItems="center">
//                             <h1 className="text-xl mb-4 font-bold">Add Goods {index + 1}</h1>
//                             <IconButton onClick={() => removeGoodsSection(index)} color="secondary">
//                                 <DeleteIcon />
//                             </IconButton>
//                         </Box>
//                         {renderFields("Add Goods", index, true)}
//                     </div>
//                 ))}

//                 {/* Button to Add More Goods Sections */}
//                 {title === "Goods Entry" && (
//                     <Box display="flex" justifyContent="center" mt={2}>
//                         <Button
//                             onClick={addAnotherGoodsSection}
//                             variant="contained"
//                             color="primary"
//                             startIcon={<AddCircleOutlineIcon />}
//                         >
//                             Add More Goods
//                         </Button>
//                     </Box>
//                 )}

//                 {/* Submit Button */}
//                 <Box display="flex" justifyContent="center" mt={5}>
//                     <Button
//                         type="submit"
//                         variant="contained"
//                         sx={{
//                             width: "60%",
//                             backgroundColor: "green",
//                             p: 2,
//                             fontWeight: "bold",
//                             "&:hover": {
//                                 backgroundColor: "darkgreen",
//                             },
//                         }}
//                     >
//                         Add to stock
//                     </Button>
//                 </Box>
//             </form>
//         </>
//     );
// };

// export default MuiFormAdd;


















import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, Snackbar, Alert } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import serverInstance from "../services/serverInstance";
import { useNavigate } from "react-router-dom";

const MuiFormAdd = ({ title, categories, fields, goodsCategories = [] }) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(fields.reduce((obj, item) => ({ ...obj, [item.name]: "" }), {}));
    const [goodsSections, setGoodsSections] = useState([]);	
    const navigate = useNavigate();
	
	// **************************
	const check = title;
	let alertPrompt = "";
	if(check === "transport"){
		alertPrompt = "Transport added successfully!";
	}
	else{
		alertPrompt = title.slice(0,1).toUpperCase() + title.slice(1, title.length-1) +  " added successfully!";
	}
// **************************





    const handleChange = (e, sectionId = 0) => {
        const { name, value } = e.target;
        const key = sectionId === 0 ? name : `${name}_${sectionId}`;
        setFormData({ ...formData, [key]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const finalData = { ...formData, addedBy: "admin" };
        const url = `/${title}/add`;

        try {
            await serverInstance.post(url, finalData);
            setOpen(true);
        } catch (error) {
            console.error("Error:", error);
            setOpen(true);
        }
    };

    const addAnotherGoodsSection = () => {
        setGoodsSections([...goodsSections, goodsSections.length]);
    };

    const removeGoodsSection = (index) => {
        const newGoodsSections = goodsSections.filter((_, i) => i !== index);
        setGoodsSections(newGoodsSections);

        const newFormData = { ...formData };
        fields.filter(field => field.category === "Add Goods").forEach(field => {
            delete newFormData[`${field.name}_${index}`];
        });
        setFormData(newFormData);
    };

    const renderFields = (category, sectionId = 0, useGridLayout = false) => (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: useGridLayout ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)',
                gap: 2
            }}
        >
            {fields.filter(field => field.category === category).map((field, fieldIndex) => (
                <TextField
                    key={`${category}-${sectionId}-${fieldIndex}`}
                    id={sectionId === 0 ? field.name : `${field.name}_${sectionId}`}
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    value={formData[sectionId === 0 ? field.name : `${field.name}_${sectionId}`]}
                    onChange={(e) => handleChange(e, sectionId)}
                    variant="outlined"
                    fullWidth
                    InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
                    inputProps={field.type === 'number' ? { min: 0 } : {}}
                />
            ))}
        </Box>
    );

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={() => {
                    setOpen(false);
                    navigate(`/${title}`);
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={() => {
                        setOpen(false);
                        navigate(`/${title}`);
                    }}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    {alertPrompt}
                </Alert>
            </Snackbar>

            <form onSubmit={handleSubmit}  className="w-3/4 flex flex-col gap-4">

                {categories.map((category, index) => (
                    <div className="p-8 border rounded-2xl bg-white bg-opacity-90" key={index}>
                        <h1 className="text-xl mb-4 font-bold">{category}</h1>
                        {renderFields(category, 0, goodsCategories.includes(category))}
                    </div>
                ))}
                

                {/* Additional Goods Sections */}
                {goodsSections.map((section, index) => (
                    <div className="p-8 border rounded-2xl bg-white bg-opacity-90 mt-4" key={`add-goods-${index}`}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <h1 className="text-xl mb-4 font-bold">Add Goods {index + 1}</h1>
                            <IconButton onClick={() => removeGoodsSection(index)} color="secondary">
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                        {renderFields("Add Goods", index, true)}
                    </div>
                ))}

                {/* Button to Add More Goods Sections */}
                {title === "Goods Entry" && (
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Button
                            onClick={addAnotherGoodsSection}
                            variant="contained"
                            color="primary"
                            startIcon={<AddCircleOutlineIcon />}
                        >
                            Add More Goods
                        </Button>
                    </Box>
                )}

                {title !== "Goods Entry" ? (
                <Box className="flex justify-center mt-5">
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: "60%",
                            backgroundColor: "green",
                            p: 2,
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: "darkgreen",
                            },
                        }}
                    >
                        Add to stock
                    </Button>
                </Box>
                ) : (
                    <div className="flex justify-center mt-5 ">
                    <Button
                        variant="contained"
                        className="bg-green-600 p-2 font-bold hover:bg-green-800 w-[60%]"
                    >
                        submit
                    </Button>
                </div>
                )}

            </form>
        </>
    );
};

export default MuiFormAdd;
