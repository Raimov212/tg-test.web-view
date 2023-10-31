import { RestoreDataType, foodListType } from "./restoreSliceType";
import { restoreListType } from "react-router/dist/lib/context";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: RestoreDataType = {
  restoreList: [] || null,
  foodList: [] || null,
};

const restoreSlice = createSlice({
  name: "restore",
  initialState,
  reducers: {
    restoreList: (state, action: PayloadAction<restoreListType>) => {
      state.restoreList.push(action.payload);
    },
    handleIncrementStoreFood: (state, action: PayloadAction<foodListType>) => {
      const existItem = state.foodList.find((c) => c.id === action.payload.id);
      if (existItem) {
        const newList = state.foodList.map((item) =>
          item.id === action.payload.id
            ? { ...existItem, quantity: existItem.quantity + 1 }
            : item
        );
        state.foodList = newList;
      } else {
        const newList = [...state.foodList, { ...action.payload, quantity: 1 }];
        state.foodList = newList;
      }
    },
    handleDecrementStoreFood: (state, action: PayloadAction<string>) => {
      state.foodList = state.foodList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  restoreList,
  handleIncrementStoreFood,
  handleDecrementStoreFood,
} = restoreSlice.actions;
export default restoreSlice.reducer;
