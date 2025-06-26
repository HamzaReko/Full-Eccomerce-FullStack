import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts:
    localStorage.getItem("SelectedProd") === null
      ? []
      : JSON.parse(localStorage.getItem("SelectedProd")),
  selectedProductsId:
    localStorage.getItem("SelectedProdid") === null
      ? []
      : JSON.parse(localStorage.getItem("SelectedProdid")),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const prodwithamount = { ...action.payload, amount: 1 };
      state.selectedProducts.push(prodwithamount);
      state.selectedProductsId.push(action.payload.id);
      localStorage.setItem(
        "SelectedProd",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "SelectedProdid",
        JSON.stringify(state.selectedProductsId)
      );
    },
    increaseAmount: (state, action) => {
      const x = state.selectedProducts.find((item) => {
        return item.id === action.payload;
      });
      x.amount += 1;
      localStorage.setItem(
        "SelectedProd",
        JSON.stringify(state.selectedProducts)
      );

    },


    decreaseAmount: (state, action) => {

      const delete2 = () => {
        state.selectedProducts = state.selectedProducts.filter((item) => {
          return item.id !== action.payload;
        });
        state.selectedProductsId = state.selectedProductsId.filter((item) => {
          return item !== action.payload;
        });
      };

      const x = state.selectedProducts.find((item) => {
        return item.id === action.payload;
      });
      x.amount > 1 ? (x.amount -= 1) : delete2();
      localStorage.setItem(
        "SelectedProd",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "SelectedProdid",
        JSON.stringify(state.selectedProductsId)
      );
    },


    deleteProduct: (state, action) => {
      state.selectedProducts = state.selectedProducts.filter((item) => {
        return item.id !== action.payload;
      });
      state.selectedProductsId = state.selectedProductsId.filter((item) => {
        return item !== action.payload;
      });
      localStorage.setItem(
        "SelectedProdid",
        JSON.stringify(state.selectedProductsId)
      );
      localStorage.setItem(
        "SelectedProd",
        JSON.stringify(state.selectedProducts)
      );
    },
  },
});

export const { addToCart, increaseAmount, decreaseAmount, deleteProduct } =
  counterSlice.actions;

export default counterSlice.reducer;
