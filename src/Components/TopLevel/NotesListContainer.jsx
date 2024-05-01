import { Box } from "@mui/material";
import classes from "./NotesListContainer.module.css";
import FilterDiv from "../AdditionalComponents/FiltersDiv";
const NotesListContainer = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          backgroundColor: "#1DB954",
          borderRadius: "1rem",
        }}
      >
        <FilterDiv />
      </Box>
    </>
  );
};

export default NotesListContainer;
