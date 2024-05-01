import { Container, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./FiltersDiv.module.css";

const FilterDiv = () => {
  return (
    <>
      <Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h6" margin={"auto"}>
            FILTER
          </Typography>
        </Box>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box className={classes.inpBox}>
            <input />
            <button>
              <SearchIcon />
            </button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FilterDiv;
