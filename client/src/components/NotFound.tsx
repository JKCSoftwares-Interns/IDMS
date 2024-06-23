import {FC} from "react";
import {AddCircleRounded, SearchOff} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

interface Props {
    title: string,
}

const NotFound: FC<Props> = ({ title }) => {
    return (
        <div className="w-full grid place-items-center">
            <div className="flex flex-col justify-center items-center gap-10">
                <SearchOff sx={{fontSize: 150}}/>
                <h1 className="text-2xl">No {title} found</h1>
                <NavLink to={`/${title}/add`}>
                    <div className="flex flex-col justify-center gap-3">
                        <Button size="large" variant="contained" color="success">
                            <AddCircleRounded/>
                        </Button>
                        <p>Click to add {title}</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default NotFound;