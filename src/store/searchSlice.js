import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: [],
    isEmpty: true,
  },
  reducers: {
    getSearchSuccess(state, action) {
      state.data = action.payload;
      const isEmpty = (obj) => {
        for (let k in obj) {
          if (obj[k].length > 0) {
            return false;
          }
        }
        return true;
      };
      state.isEmpty = isEmpty(action.payload);
    },
  },
});

export const { getSearchSuccess } = searchSlice.actions;

export default searchSlice.reducer;
