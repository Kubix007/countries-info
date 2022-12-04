import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICountryState } from "../../shared/types";
import countryService from "../../services/countryService";
import merge from "lodash.merge";

const initialState: ICountryState = {
  countries: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoaded: false,
};

//Get users
export const getCountryNames = createAsyncThunk(
  "/countries/getAll",
  async (size: string, thunkAPI) => {
    try {
      return await countryService.getCountryNames(size);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setDetails: (state, action) => {
      state.countries = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCountryNames.pending, (state) => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(getCountryNames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoaded = true;
        state.countries = action.payload;
      })
      .addCase(getCountryNames.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isLoaded = false;
      });
  },
});

export const { reset, setDetails } = countrySlice.actions;
export default countrySlice.reducer;
