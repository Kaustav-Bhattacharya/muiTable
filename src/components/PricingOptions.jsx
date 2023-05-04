import {
  Box,
  Button,
  FormControlLabel,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

const mockData = [
  {
    pricingOption: "Workoshop#1 + PO #1",
    expires: "3/4/24",
    price: "$854.08",
    credits: "20",
  },
  {
    pricingOption: "Workoshop#2 + PO #2",
    expires: "3/4/24",
    price: "$854.08",
    credits: "60",
  },
  {
    pricingOption: "Workoshop#3 + PO #3",
    expires: "3/4/24",
    price: "$854.08",
    credits: "70",
  },
  {
    pricingOption: "Workoshop#4 + PO #4",
    expires: "3/4/24",
    price: "$854.08",
    credits: "30",
  },
  {
    pricingOption: "Workoshop#5 + PO #5",
    expires: "3/4/24",
    price: "$854.08",
    credits: "60",
  },
  {
    pricingOption: "Workoshop#6 + PO #6",
    expires: "3/4/24",
    price: "$854.08",
    credits: "90",
  },
  {
    pricingOption: "Workoshop#7 + PO #7",
    expires: "3/4/24",
    price: "$854.08",
    credits: "30",
  },
  {
    pricingOption: "Workoshop#8 + PO #8",
    expires: "3/4/24",
    price: "$854.08",
    credits: "70",
  },
  {
    pricingOption: "Workoshop#9 + PO #9",
    expires: "3/4/24",
    price: "$854.08",
    credits: "20",
  },
];
const mockHeader = [
  "Pricing Options",
  "Expires",
  "Price",
  "Credits",
  "Defaults",
];

const RowsPerPageOptions = [5, 10, 25];

export const PricingOptions = () => {
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
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography color="#003087" variant="h6">
          All Pricing Options
        </Typography>
        <Box >
          <Button variant="contained" sx={{mr:1}}>Save</Button>
          <Button variant="outlined">New Pricing Option</Button>
        </Box>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "#F8FBFF", width: "full", mt: "30px" }}
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
                    {item.pricingOption}
                  </TableCell>
                  <TableCell>{item.expires}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.credits}</TableCell>
                  <TableCell>
                    <FormControlLabel
                      control={<Radio />}
                      value="defaultSelected"
                    />
                  </TableCell>
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
          sx={{ backgroundColor: "#F8FBFF" }}
        />
      </TableContainer>
    </Box>
  );
};
