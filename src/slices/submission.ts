import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  submissions: [],
};

const slice = createSlice({
  name: 'submission',
  initialState,
  reducers: {
    getSubmissions(state) {
      state.submissions = [];
    },
  },
});

export const { actions } = slice;
export const { reducer } = slice;
export default slice;
