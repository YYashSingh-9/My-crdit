import { Container, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const FilterDiv = () => {
  return (
    <>
      <Box>
        <Container>
          <Typography variant="h3">FILTER</Typography>
          <Box>
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
