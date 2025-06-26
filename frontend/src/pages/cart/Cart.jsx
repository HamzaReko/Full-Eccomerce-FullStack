import {
  Box,
  Button,
  Stack,
  Typography,
  IconButton,
  Badge,
  styled,
  Divider,
} from "@mui/material";
import "./Cart.css";
import { Add, Delete, Remove } from "@mui/icons-material";
const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    padding: "0 6px",
    backgroundColor: "#1976d2",
    color: "white",
  },
}));
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseAmount, deleteProduct, increaseAmount } from "@/redux/cartSlice";
const Cart = () => {
  const dispatch = useDispatch()
  // @ts-ignore
  const { selectedProducts } = useSelector((state) => state.carttt);

let total = 0
  const theme = useTheme();
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      {selectedProducts.map((item,i) => {
        total += item.price * item.amount
        return (
          <Stack
            key={i}
            alignItems={"center"}
            justifyContent={"space-between"}
            pl={{ xs: 0, sm: 1, md: 3 }}
            pr={1}
            my={2}
            width={{ md: 520, sm: 380, xs: 333 }}
            borderRadius={2}
            height={80}
            // @ts-ignore
            sx={{ bgcolor: theme.palette.hamzaColor.bgcolorwhite }}
            direction={"row"}
          >
            <Button
                onClick={() => {
                  dispatch(deleteProduct(item.id))
                }}
              sx={{ display: { xs: "none", sm: "block" } }}
              variant="text"
              color="error"
            >
              DELETE
            </Button>
            <IconButton
            onClick={() => {
              dispatch(deleteProduct(item))
            }}
              sx={{
                display: { xs: "block", sm: "none" },
                mt: "3px",
                color:
                  // @ts-ignore
                  theme.palette.favColor.main,
              }}
            >
              <Delete />
            </IconButton>
            <Typography variant="body2" color="black">
              ${item.price * item.amount}
              
            </Typography>
            <Box>
            <IconButton onClick={() => {
                dispatch(decreaseAmount(item.id))
              }} sx={{ color: "#1976d2" }}>
                <Remove />
              </IconButton>
              <StyledBadge sx={{ mx: 0.7 }} badgeContent={item.amount} color="primary" />
              <IconButton onClick={() => {
                dispatch(increaseAmount(item.id))
              }} sx={{ color: "#1976d2" }}>
                <Add />
              </IconButton>
            </Box>
            <Typography mr={1} variant="body2" color="black">
              {item.productName}
            </Typography>
            <img
              width={75}
              height={70}
              src={item.imageLink}
              alt=""
            />
          </Stack>
        );
      })}
      <Stack
        sx={{
          width: 200,
          bgcolor:
            // @ts-ignore
            theme.palette.hamzaColor.main,
          mt: 6,
          p: 1,
        }}
        mb={6}
      >
        <Typography p={1.5} textAlign={"center"} variant="h6" color="inherit">
          Cart Summary
        </Typography>
        <Divider />
        <Stack
          p={1}
          pb={1.5}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Typography variant="body1" color="inherit">
            Subtotal
          </Typography>
          <Typography variant="body1" color="inherit">
            ${total}
          </Typography>
        </Stack>
        <Button variant="contained" color="primary">
          CHECKOUT
        </Button>
      </Stack>
    </Box>
  );
};

export default Cart;
