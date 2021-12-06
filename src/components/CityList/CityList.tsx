import { Box, createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { useCities } from "../../hooks/useCities";
import myData  from '../../data/nl.json';
import { ListFilter } from "../ListFilter/ListFilter";
import { TableComponent } from "../TableComponent/TableComponent";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100% - 66px)',
      padding: theme.spacing(3),
    },
    list: {
      height: '100%',
      background: '#FFFFFF',
      borderRadius: 15,
      padding: theme.spacing(2, 3, 4),
    },
  })
);

const CityList: FC = () => {
    const classes = useStyles();
    //console.log(myData)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchVal, setSearchVal] = useState('');

    //const { isLoading, data: tickets } = useCities();
    //console.log(tickets)
    let filteredrowRenderers:any = [];
    const [data] = useState(myData);
    
    const getFilteredData = () => {
      console.log(searchVal)
        if (searchVal.length > 0) {
            return data.filter((e: any) => e?.city.toLowerCase().match(searchVal));;
        }
        return data;
    }
    if(data) {
      filteredrowRenderers = getFilteredData();
    }
    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChangeInput = (searchValue: any) => {
        console.log(searchValue);
        setSearchVal(searchValue)
    };

    

    return (
        <Paper>
            <ListFilter handleChangeInput={handleChangeInput}/>
            <TableComponent data={filteredrowRenderers}/>
        </Paper>
      );
}

export { CityList };

