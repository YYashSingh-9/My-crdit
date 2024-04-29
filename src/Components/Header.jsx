import { Box, IconButton } from "@mui/material";
import AppBar from "@mui/material";
const Header = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <IconButton></IconButton>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
