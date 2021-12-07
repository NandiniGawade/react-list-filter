import { createStyles, makeStyles } from "@material-ui/core";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow  } from "@material-ui/core";
import { FC } from "react";
import columns  from '../../data/columns.json';
import { CityDataType } from "../../models/city-data-type";
import { NothingFound } from "../EmptyState/NothingFound";

type Props = {
    data: CityDataType[];
    handleChangeRowsPerPage: (event: any) => void;
    handleChangePage: (event: any, newPage: number) => void;
    rowsPerPage: number;
    page: number;
};

const useStyles = makeStyles(() =>
  createStyles({
   root: {
     maxHeight: '500px'
   },
   container: {
    marginLeft: '5px',
    marginRight: '5px',
    border: '1px solid gray'
   }
  })
);

const TableComponent: FC<Props> = ({ data, handleChangeRowsPerPage, handleChangePage, page, rowsPerPage }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
     {
        data.length === 0 &&
            <NothingFound/>
     }
     {
       data.length > 0 &&
       <><TableContainer className={classes.root}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, i) => (
                  <TableCell
                    key={i}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {<TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, i) => {
                  return (
                    <TableRow hover key={i}>
                      {columns.map((column, i) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={i}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>}
          </Table>
        </TableContainer><TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage} /></>
     }
    
</Paper>
  )
}

export default TableComponent;
