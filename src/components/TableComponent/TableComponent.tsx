import { Paper } from "@material-ui/core";
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow  } from "@mui/material";
import { FC } from "react";

type Props = {
    data: any[];
};

const columns = [{
    id: 'city',
    align: 'left',
    minWidth: '100px',
    label: 'City'
},
{
    id: 'admin_name',
    align: 'left',
    minWidth: '100px',
    label: 'Admin name'
}, {
id: 'population',
align: 'left',
minWidth: '100px',
label: 'Population'
}]

const TableComponent: FC<Props> = ({ data }) => (
    
    <Paper>
        <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {<TableBody>
            {data
              //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>}
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
        
)

export { TableComponent };