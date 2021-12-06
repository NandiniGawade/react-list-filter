import { TextField } from "@mui/material";
import { FC } from "react";

type Props = {
    handleChangeInput: (searchValue: string) => void;
};

const ListFilter: FC<Props> = ({ handleChangeInput }) => (
    <div>
        <TextField id="standard-basic" label="Standard" variant="standard" onChange={(e) => handleChangeInput(e.target.value)}/>
    </div>
)

export { ListFilter };