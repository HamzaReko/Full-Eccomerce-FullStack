import { useGetproductByNameQuery } from "@/redux/productsApi";
import {
  Badge,
  Box,
  Button,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import { useParams } from "react-router";
import "./details.css";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseAmount, increaseAmount, addToCart } from "@/redux/cartSlice";
import { Remove, Add } from "@mui/icons-material";
const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    padding: "0 4px",
  },
}));
const Details = () => {
  const dispatch = useDispatch();
  const productAmount = (selectedProductId) => {
    const myProduct = selectedProducts.find((item) => {
      return item.id === selectedProductId.id;
    });
    return myProduct.amount;
  };
  const { selectedProductsId, selectedProducts } = useSelector(
    // @ts-ignore
    (state) => state.carttt
  );

  const myRef = useRef(null);
  const DetailsThumb = ({ myRef, images, tab }) => {
    return (
      <div className="thumb" ref={myRef}>
        {images.map((img, index) => (
          <img src={img} alt="" key={index} onClick={() => tab(index)} />
        ))}
      </div>
    );
  };

  const handleTab = (index) => {
    // this.setState({index: index})
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };
  let params = useParams();
  const { data, error, isLoading } = useGetproductByNameQuery(params.id);
  const [index, setIndex] = useState(0);
  return (
    <>
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}

      {data && (
        <>
          <div className="details-page">
            <div className="details">
              <div className="big-img">
                <img height={580} src={data.imageLink[index]} alt="" />
              </div>

              <div className="box">
                <div className="row">
                  <h2>{data.productName}</h2>
                  <span>${data.price}</span>
                </div>
                {/* <Colors colors={data.colors} /> */}

                <p>{data.description}</p>
                {/* <p>{data.content}</p> */}

                <DetailsThumb
                  images={data.imageLink}
                  tab={handleTab}
                  myRef={myRef}
                />
                {selectedProductsId.includes(data.id) ? (
                  <Box>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        dispatch(decreaseAmount(data.id));
                      }}
                    >
                      <Remove fontSize="medium" />
                    </IconButton>
                    <StyledBadge
                      sx={{ mx: 1 }}
                      badgeContent={productAmount(data)}
                      color="primary"
                    />
                    <IconButton
                      color="primary"
                      onClick={() => {
                        dispatch(increaseAmount(data.id));
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
                      dispatch(addToCart(data));
                    }}
                  >
                    Add to cart
                  </Button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
