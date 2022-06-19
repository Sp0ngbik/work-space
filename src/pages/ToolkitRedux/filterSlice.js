import { createSlice } from "@reduxjs/toolkit";

const filterSlicer = createSlice({
  name: "filter",
  initialState: {
    filteredValue: "",
  },
  reducers: {
    filterText(state, action) {
      state.filteredValue = action.payload;
    },
  },
});
export default filterSlicer.reducer;
export const { filterText } = filterSlicer.actions;
