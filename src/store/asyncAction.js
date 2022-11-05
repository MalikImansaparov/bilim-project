import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { api } from '../api/const';
import { getSearchSuccess } from './searchSlice';

export const asyncSearch = createAsyncThunk(
  'search/fetchMaterial',
  async (value, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios({
        method: 'post',
        url: api + '/search/',
        data: {
          body: `${value}`,
        },
      });
      dispatch(getSearchSuccess(response.data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

