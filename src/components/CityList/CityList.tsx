import { Paper} from "@material-ui/core";
import { FC, useState } from "react";
import cityData  from '../../data/nl.json';
import { CityDataType } from "../../models/city-data-type";
import { ListFilter } from "../ListFilter/ListFilter";
import TableComponent  from "../TableComponent/TableComponent";

const CityList: FC = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchVal, setSearchVal] = useState('');

    let filteredrowRenderers: CityDataType[] = [];
    const [data] = useState(cityData);
    
    const getFilteredData = () => {
        if (searchVal.length > 0) {
            return data.filter((e: CityDataType) => e?.city.toLowerCase().match(searchVal.toLowerCase()));;
        }
        return data;
    }
    if(data) {
      filteredrowRenderers = getFilteredData();
    }
    const handleChangePage = (_: any, newPage: number) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChangeInput = (searchValue: string) => {
        setSearchVal(searchValue)
    };

    return (
        <Paper>
            <ListFilter handleChangeInput={handleChangeInput}/>
            <TableComponent 
                data = { filteredrowRenderers } 
                handleChangeRowsPerPage = { handleChangeRowsPerPage }
                handleChangePage = { handleChangePage }
                page = { page }
                rowsPerPage = { rowsPerPage }
            />
        </Paper>
      );
}

export { CityList };

