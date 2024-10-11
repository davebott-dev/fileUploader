import { useState } from "react";
import PropTypes from "prop-types";
import { Download, Edit, Star, Delete } from "@mui/icons-material";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from "@mui/material";


const DataTable = ({ data, user }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };
  const handleRowChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(0);
  };

  const visibleRows = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Last Opened</strong>
              </TableCell>
              <TableCell>
                <strong>Owner</strong>
              </TableCell>
              <TableCell>
                <strong>Location</strong>
              </TableCell>
              <TableCell>
                <strong>File Size</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((d, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {d.fileName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {d.createdAt}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {d.location}
                </TableCell>
                <TableCell component="th" scope="row">
                  {d.size}
                </TableCell>
                <TableCell component="th" scope="row">
                  <div className="actions">
                    <div>
                      <Download />
                    </div>
                    <div>
                      <Edit />
                    </div>
                    <div>
                      <Star />
                    </div>
                    <div>
                      <Delete />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowChange}
      ></TablePagination>
    </Box>
  );
};

export default DataTable;
