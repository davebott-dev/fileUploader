import { useState } from "react";
import { Download, Edit, Star, Delete } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import { tableCellClasses } from "@mui/material/TableCell";
import "../App.css";
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
  IconButton,
  Stack,
  Skeleton
} from "@mui/material";

const StyledTableHead = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const DataTable = ({ data, user, loading }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [action, setAction] = useState("/api/");

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
    loading? 
    <div>
    <Skeleton variant = "text" sx={{fontSize:'1rem'}}/>
    <Skeleton variant = "rectangular" width="100%" height = {450}/>
    </div>
    :<Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <StyledTableHead>
                <strong>Name</strong>
              </StyledTableHead>
              <StyledTableHead>
                <strong>Last Opened</strong>
              </StyledTableHead>
              <StyledTableHead>
                <strong>Owner</strong>
              </StyledTableHead>
              <StyledTableHead>
                <strong>Location</strong>
              </StyledTableHead>
              <StyledTableHead>
                <strong>File Size</strong>
              </StyledTableHead>
              <StyledTableHead>
                <strong>Actions</strong>
              </StyledTableHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((d, index) => {
              return (
                <TableRow
                  hover
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
                    <Stack direction="row" spacing={1}>
                      <IconButton>
                        <Download />
                      </IconButton>
                      <IconButton>
                        <Edit />
                      </IconButton>
                      <form action={action} method="POST">
                        <button className="update">
                          <IconButton
                            onClick={() =>
                              setAction(action + "favorite/" + d.id)
                            }
                          >
                            {d.isFav ? (
                              <Star sx={{ color: yellow[500] }} />
                            ) : (
                              <Star />
                            )}
                          </IconButton>
                        </button>
                      </form>
                      <form action={action} method="POST">
                        <button className="delete">
                          <IconButton
                            onClick={() => setAction(action + "delete/" + d.id)}
                          >
                            <Delete />
                          </IconButton>
                        </button>
                      </form>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
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
