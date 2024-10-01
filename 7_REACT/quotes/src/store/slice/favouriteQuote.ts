import { QuoteType } from "@/types/quotes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: QuoteType[] = [];

// add one quote using random api - use of createAsycThunk
// Simulate an API call
export const fetchoneRandomQuote = createAsyncThunk(
  "quote/fetchRandomQuote",
  async () => {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) {
      throw new Error("error in favourite quote fetching!");
    }
    return await response.json();
  }
);

const favouriteQuote = createSlice({
  name: "favourite",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchoneRandomQuote.pending, (state) => {
        console.log("Pending state: ", state);
      })
      .addCase(fetchoneRandomQuote.fulfilled, (state, action) => {
        if (state.length <= 0) {
          state.push(action.payload);
        }
      })
      .addCase(fetchoneRandomQuote.rejected, (state) => {
        console.log("Error state: ", state);
      });
  },
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
