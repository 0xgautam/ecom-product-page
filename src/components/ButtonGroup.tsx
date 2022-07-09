import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const ButtonGroup = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const dispatch = useDispatch();

  return (
    <Box component={"div"} sx={{ display: "flex", gap: "2rem", mt: "2rem" }}>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          padding: "1rem 2rem",
          backgroundColor: "hsl(223, 64%, 98%)",
          borderRadius: "0.5rem",
        }}
      >
        <span
          style={{
            cursor: quantity === 0 ? "not-allowed" : "pointer",
          }}
        >
          <IconButton
            size="large"
            onClick={() => setQuantity((quantity) => quantity - 1)}
            disabled={quantity === 0}
            sx={{
              height: "2rem",
              width: "2rem",
            }}
          >
            <RemoveIcon color="primary" />
          </IconButton>
        </span>
        <Typography component={"h4"}>{quantity}</Typography>
        <IconButton
          size="large"
          onClick={() => setQuantity((quantity) => quantity + 1)}
          sx={{
            height: "2rem",
            width: "2rem",
          }}
        >
          <AddIcon color="primary" />
        </IconButton>
      </Box>

      <Button
        disabled={quantity === 0}
        variant="contained"
        sx={{
          flex: 2,
          color: "white",
        }}
        onClick={() => {
          dispatch(
            addItem({
              id: 1,
              product: "Fall Limited Edition Sneakers",
              price: 125.0,
              quantity,
              src: "/images/image-product-1-thumbnail.jpg",
            })
          );
          setQuantity(0);
        }}
      >
        Add To Cart
      </Button>
    </Box>
  );
};

export default ButtonGroup;
