import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type cartState = {
  length: number;
};

const initialState: cartState = {
  length: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartLength(state, action: PayloadAction<number>) {
      state.length = action.payload;
    },

    incrementCartLength(state) {
      state.length += 1;
    },
  },
});

export const { setCartLength, incrementCartLength } = cartSlice.actions;

export default cartSlice.reducer;
