import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICountryState } from "../../shared/types";
import countryService from "./countryService";

const initialState: ICountryState = {
  countries: {
    country: null,
    population: "",
    capital: "",
    languages: "",
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
};

//Get users
export const getCountries = createAsyncThunk(
  "/countries/getAll",
  async (size: string, thunkAPI) => {
    try {
      return await countryService.getCountries(size);
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
  },
  extraReducers(builder) {
    builder
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.countries = action.payload;
      })
      .addCase(getCountries.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = countrySlice.actions;
export default countrySlice.reducer;
