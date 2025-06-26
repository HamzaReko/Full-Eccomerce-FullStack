import "./Home.css";
import {
  Typography,
  Button,
  Stack,
  Box,
  CircularProgress,
  IconButton,
  Badge,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useGetproductsByNameQuery } from "@/redux/productsApi";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseAmount, increaseAmount } from "@/redux/cartSlice";
import { Remove, Add } from "@mui/icons-material";
import { useNavigate } from "react-router";
const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    padding: "0 4px",
  },
}));
const Home = () => {
  const productAmount = (selectedProductId) => {
    const myProduct = selectedProducts.find((item) => {
      return item.id === selectedProductId.id
    })
    return myProduct.amount
  }
  // @ts-ignore
  const { selectedProductsId,selectedProducts } = useSelector((state) => state.carttt);
  const theme = useTheme();
  const { data, error, isLoading } = useGetproductsByNameQuery();

  const dispatch = useDispatch();
   const navigate = useNavigate();
  return (
    <Stack
      direction={"row"}
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {data &&
        data.map((item, i) => {
          return (
            <Card
              className="cardEffect"
              key={i}
              sx={{ maxWidth: 277, mb: 6, mx: 2 }}
            >
              <CardMedia
                component="img"
                height="280"
                image={item.imageLink[0]}
                alt="product"
                sx={{cursor:"pointer"}}
                onClick={() => {
                  navigate(`productdetails/${item.id}`);
                }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "space-between" }}
                disableSpacing
              >
                {selectedProductsId.includes(item.id) ? (
                  <Box>
                    <IconButton
                    color="primary"
                      onClick={() => {
                        dispatch(decreaseAmount(item.id));
                      }}
                    >
                      <Remove fontSize="medium" />
                    </IconButton>
                    <StyledBadge
                      sx={{ mx: 1 }}
                      badgeContent={productAmount(item)}
                      color="primary"
                    />
                    <IconButton
                    color="primary"

                      onClick={() => {
                        dispatch(increaseAmount(item.id));
                      }}
                    >
                      <Add fontSize="medium" />
                    </IconButton>
                  </Box>
                ) : (
                  <Button
                    sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                  >
                    Add to cart
                  </Button>
                )}
                <Typography
                  mr={1}
                  variant="body1"
                  color={theme.palette.error.light}
                >
                  ${item.price}
                </Typography>
              </CardActions>
            </Card>
          );
          
        })}
        {error && (

<Typography variant="h5" color="error">
Please Try Again Later
</Typography>

        )}
    </Stack>
  );
};

export default Home;
