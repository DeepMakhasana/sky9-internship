import { QuoteType } from "@/types/quotes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: QuoteType[] = [];

const favouriteQuote = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      state = state.filter((quote) => quote.id != action.payload);
      return state;
    },
  },
});

export const { add, remove } = favouriteQuote.actions;

export default favouriteQuote.reducer;
