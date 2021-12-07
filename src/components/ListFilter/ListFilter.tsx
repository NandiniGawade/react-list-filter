import { FC } from "react";
import { createStyles, makeStyles, TextField } from "@material-ui/core";


type Props = {
    handleChangeInput: (searchValue: string) => void;
};

const useStyles = makeStyles(() =>
  createStyles({
   root: {
     marginBottom: '20px',
     marginTop: '20px'
   },
   inputText: {
    width: '98%'
   }
  })
);

const ListFilter: FC<Props> = ({ handleChangeInput }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField className={classes.inputText} id="standard-basic" label="Search City" variant="standard" onChange={(e) => handleChangeInput(e.target.value)}/>
        </div>
    )
}

export { ListFilter };