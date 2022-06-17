import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";
import { useSearchResultContext } from "../contexts/SearchResultContext";
import BodyPart from "./BodyPart";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <ArrowLeftIcon
      sx={{ color: "#5e35b1" }}
      fontSize='large'
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      display='inline'
    />
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <ArrowRightIcon
      sx={{ color: "#5e35b1" }}
      fontSize='large'
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      display='inline'
    />
  );
};

const HorizontalScrollbar = ({ data }) => {
  const { isBodyPart } = useSearchResultContext();
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item, index) => (
        <Box
          itemId={item.id || index} // NOTE: itemId is required for track items
          key={item.id || index}
          title={item.id || item}
          margin='20px'>
          {isBodyPart ? (
            <BodyPart item={item} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
