import {
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import classes from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <Box>
        <Toolbar>
          <img src={logo} className={classes.logoImg} />
          <Typography
            variant="h4"
            sx={{ color: "#191414", marginLeft: 2, fontWeight: 700 }}
          >
            MY CRDIT
          </Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Typography variant="h3">Account</Typography>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Header;
