import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
function CustomButton({
  paddingX,
  paddingY,
  text,
  fontSize,
  marginRight,
  marginTop,
}) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          px: `${paddingX}`,
          py: `${paddingY}`,
          background:
            "linear-gradient(180deg,#D9C256,rgba(159,114,12,1))",
          color: "black",
          borderRadius: ".8rem",
          fontFamily: "Inter",
          textTransform: "capitalize",
          mr: `${marginRight}`,
          mt: `${marginTop}`,
          fontWeight: 600,
          fontSize: `${fontSize}`,
          "&:hover": {
            background:
              "linear-gradient(180deg,#D9C256,rgba(159,114,12,1))",
          },
        }}
      >
        {text}
      </Button>
    </>
  );
}

export default CustomButton;
