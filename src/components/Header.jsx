import { ThemeProvider, Typography, createTheme } from "@mui/material";
const style = {
  margin: "1rem",
  padding: "0.5rem",
  fontFamily: "Myriad Pro",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "40px",
  lineHeight: "100%",
};

const Header = (props) => {
  const theme = createTheme({
    palette: {
      customColor: "#003087",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Typography color={"customColor"} variant="h1" style={style}>
        {props.children}
      </Typography>
    </ThemeProvider>
  );
};

export default Header;
