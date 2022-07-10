import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCart, getQuantity, removeItem } from "../store/cartSlice";
import { useAppSelector } from "../store/hooks";
import type { cartItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, price, product, quantity, src }: cartItem) => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "0.5rem", sm: "1rem" },
        alignItems: "center",
        justifyContent: { sm: "space-around" },
      }}
    >
      <Box
        component={"img"}
        src={src}
        sx={{
          borderRadius: "0.5rem",
          height: { xs: "3rem", sm: "5rem" },
          width: { xs: "3rem", sm: "5rem" },
        }}
      />

      <Box sx={{ width: { xs: "45%", sm: "100%" } }}>
        <Typography noWrap>{product}</Typography>
        <Typography
          variant={"h6"}
          component={"h6"}
          sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
        >
          {quantity} x {price} = {quantity * price}
        </Typography>
      </Box>

      <IconButton
        color="warning"
        onClick={() => {
          dispatch(removeItem(id));
          console.log(id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

const Cart = () => {
  const quantity = useAppSelector(getQuantity);
  const cart = useAppSelector(getCart);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton size="large" onClick={handleClick}>
        <Badge badgeContent={quantity ? quantity : 0} color={"primary"}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            padding: { xs: "1rem", sm: "2rem" },
            minWidth: { sm: "15rem" },
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Typography gutterBottom>Cart</Typography>
        <Divider sx={{ mb: "2rem" }} />
        {cart.length ? (
          <>
            {cart.map((item) => (
              <MenuItem>
                <CartItem
                  id={item.id}
                  price={item.price}
                  product={item.product}
                  quantity={item.quantity}
                  src={item.src}
                />
              </MenuItem>
            ))}
            <Button
              variant="contained"
              sx={{ width: "100%", color: "white", mt: "2rem" }}
            >
              Checkout
            </Button>
          </>
        ) : (
          <Typography>Your Cart Is Empty</Typography>
        )}
      </Menu>
    </>
  );
};

export default Cart;
