import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NasaState } from '@interfaces/reduxInterfaces';
import ApodService from '@services/ApodService';

const initialState: NasaState = {
  nasaApodElement: null,
  nasaApodElementLoading: false,
  nasaApodElementError: null
};

export const getNasaPictureOfTheDay = createAsyncThunk('nasa/getPicture', async () => {
  const response = await ApodService.getRandomPicture();
  return response.data;
});

export const nasaSlice = createSlice({
  name: 'nasa',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(getNasaPictureOfTheDay.pending, state => {
      state.nasaApodElementLoading = true;
    });
    builder.addCase(getNasaPictureOfTheDay.fulfilled, (state, action) => {
      state.nasaApodElementLoading = false;
      state.nasaApodElement = action.payload?.[0] || null;
    });
    builder.addCase(getNasaPictureOfTheDay.rejected, state => {
      state.nasaApodElementLoading = false;
      state.nasaApodElement = null;
    });
  }
});

export default nasaSlice.reducer;
