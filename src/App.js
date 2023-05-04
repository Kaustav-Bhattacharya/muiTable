import Tables from "./components/Tables";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Header from "./components/Header";
import { Search } from "@mui/icons-material";
import { useState } from "react";

function App() {
  const [filterOption, setFilterOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    //will filter the search here
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1
        }}
      >
        <Header sx={{ flexGrow: 1 }}>Service Managment</Header>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="contained" sx={{ mr: 1 }}>
            Add New
          </Button>
          <Button variant="outlined">Manage</Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="fliter-options">{`Filter ${filterOption}`}</InputLabel>
            <Select
              labelId="fliter-options"
              id="filter"
              value={filterOption}
              label={`Filter ${filterOption}`}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Example 1"}>Example 1</MenuItem>
              <MenuItem value={"Example 2"}>Example 2</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{ width: "60px", ml: "10px" }}
          >{`${filterOption} Services`}</Box>
        </Box>
        <Box>
          <TextField
            size="small"
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={e=>setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Box sx={{display:"flex", justifyContent:"center"}}>

      <Tables />
      </Box>
    </>
  );
}

export default App;
