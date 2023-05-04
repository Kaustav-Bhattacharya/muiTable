import { Box } from "@mui/system";
import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import ConfigureForm from "./ConfigureForm";
import { PricingOptions } from "./PricingOptions";

const Forms = () => {
  const [value, setValue] = useState("1");

  return (
    <Box>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TabList
            indicatorColor="primary"
            onChange={(e, newValue) => setValue(newValue)}
            sx={{ width: "100%", maxWidth: "640px" }}
          >
            <Tab
              label="Configure"
              value="1"
              sx={{ width: "50%", textAlign: "center" }}
            />
            <Tab
              label="Pricing Option"
              value="2"
              sx={{ width: "50%", textAlign: "center" }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ConfigureForm />
        </TabPanel>
        <TabPanel value="2">
          <PricingOptions />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Forms;
