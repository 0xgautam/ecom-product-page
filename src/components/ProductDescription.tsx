import { Box, Typography } from "@mui/material";
import ButtonGroup from "./ButtonGroup";

const ProductDescription = () => {
  return (
    <Box component={"div"} sx={{ margin: "3rem 2rem" }}>
      <Typography
        variant="h6"
        sx={{
          letterSpacing: "2px",
          color: "primary.main",
          fontWeight: 700,
          fontSize: "1rem",
        }}
      >
        SNEAKERS COMPANY
      </Typography>
      <Typography variant="h3" sx={{ fontSize: "3rem", fontWeight: 700 }}>
        Fall Limited Edition Sneakers
      </Typography>
      <Typography
        variant="body1"
        color={"GrayText"}
        sx={{ fontSize: "1.2rem", mt: "2rem" }}
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Typography>

      <Typography
        variant="h3"
        sx={{ fontSize: "2rem", fontWeight: 700, mt: "2rem" }}
      >
        $125.00
        <Box
          component={"span"}
          sx={{
            backgroundColor: "primary.light",
            color: "primary.main",
            fontSize: "1.25rem",
            fontWeight: 700,
            borderRadius: "0.5rem",
            padding: "0.25rem 0.5rem",
            ml: "1rem",
          }}
        >
          50%
        </Box>
      </Typography>

      <Typography
        color={"GrayText"}
        sx={{
          fontSize: "1.25rem",
          fontWeight: 700,
          mt: "1rem",
          opacity: "0.6",
          textDecoration: "line-through",
        }}
      >
        $250.00
      </Typography>

      <ButtonGroup />
    </Box>
  );
};

export default ProductDescription;
