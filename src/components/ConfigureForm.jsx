import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from "@mui/material";

const ConfigureForm = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="service-category-label">
               SERVICE CATEGORY
              </InputLabel>
              <Select labelId="service-category-label" id="service-category">
                <MenuItem value="category-1">Category 1</MenuItem>
                <MenuItem value="category-2">Category 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <RadioGroup name="options" row>
                <FormControlLabel
                  control={<Radio />}
                  label="Enrollment"
                  value="enrollment"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Appointment"
                  value="appointment"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              label="DESCRIPTION"
              variant="outlined"
              sx={{ mt: 2 }}
            />
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="level-label">LEVEL</InputLabel>
              <Select labelId="level-label" id="level" >
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="DURATION"
              variant="outlined"
              required
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="MAX WAITLIST"
              variant="outlined"
              required
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="EMAIL NOTE"
              variant="outlined"
              sx={{ mt: 2 }}
            />
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{ display: "flex", justifyContent: "end", alignItems: "end" , my:1 }}
            >
              <Button variant="contained" sx={{ alignSelf: "end"}}>
                Save
              </Button>
            </Box>
            <TextField
              fullWidth
              label="NAME"
              variant="outlined"
              required
              sx={{ mt: 2, borderRadius:'10px' }}
            />
            <TextField
              fullWidth
              label="PREREQUISITE"
              variant="outlined"
              sx={{ mt: 2, borderRadius:'10px' }}
            />
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="service-type-label">SERVICE TYPE</InputLabel>
              <Select labelId="service-type-label" id="service-type">
                <MenuItem value="type-1">Type 1</MenuItem>
                <MenuItem value="type-2">Type 2</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="MAX CAPACITY"
              variant="outlined"
              required
              sx={{ mt: 2, borderRadius:'10px' }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                justifyContent: "space-around",
              }}
            >
              <FormControlLabel control={<Checkbox />} label="By Appointment" />
              <FormControlLabel
          control={
            <Switch name="free" />
          }
          label="Free"
        />
            </Box>
            <TextField
              fullWidth
              label="FIXED # OF SESSIONS"
              variant="outlined"
              sx={{ mt: 2,borderRadius:'10px' }}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ConfigureForm;
