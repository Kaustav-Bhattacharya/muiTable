import { Image } from "@mui/icons-material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import React, { useState } from "react";

const mockData = [
  {
    serviceName: "Service #1",
    serviCategory: "Category",
    type: "Example Type",
    duration: "40 hours",
  },
  {
    serviceName: "Service #2",
    serviCategory: "Category",
    type: "Example Type",
    duration: "40 hours",
  },
  {
    serviceName: "Service #3",
    serviCategory: "Category",
    type: "Example Type",
    duration: "40 hours",
  },
  {
    serviceName: "Service #4",
    serviCategory: "Category",
    type: "Example Type",
    duration: "40 hours",
  },
  {
    serviceName: "Service #5",
    serviCategory: "Category",
    type: "Example Type",
    duration: "40 hours",
  },
  {
    serviceName: "Service #6",
    serviCategory: "Category",
    type: "Example Type",
    duration: "40 hours",
  },
  {
    serviceName: "Service #7",
    serviCategory: "Category",
    type: "Example Type",
    duration: "40 hours",
  },
  {
    serviceName: "Service #8",
    serviCategory: "Category",
    type: "Example Type",
    duration: "40 hours",
  },
  {
    serviceName: "Service #9",
    serviCategory: "Category",
    type: "Example Type",
    duration: "40 hours",
  },
];
const mockHeader = [
  "Service Name",
  " Service Category",
  "Type",
  "Duration",
  "",
];

const RowsPerPageOptions = [5, 10, 25];

const Tables = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(RowsPerPageOptions[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#c1e9e9", width: "90vw", mt: "30px" }}
    >
      <Table aria-aria-label="simple table">
        <TableHead>
          <TableRow>
            {mockHeader.map((header) => (
              <TableCell style={{ fontWeight: "bold" }}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell sx={{ display: "flex", alignItems: "center" }}>
                  <Image />
                  {item.serviceName}
                </TableCell>
                <TableCell>{item.serviCategory}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.duration}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={RowsPerPageOptions}
        component="div"
        count={mockData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ backgroundColor: "#c1e9e9" }}
      />
    </TableContainer>
  );
};

export default Tables;
