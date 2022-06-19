import { createSlice } from "@reduxjs/toolkit";

const toolkitSlicer = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
    todo: ["try todo"],
  },
  reducers: {
    increment(state) {
      state.count = state.count += 1;
    },
    decrement(state) {
      state.count = state.count -= 1;
    },
    addTodo(state, action) {
      state.todo.push(action.payload);
    },
    removeLastTodo(state) {
      state.todo.pop();
    },
  },
});

export default toolkitSlicer.reducer;
//export экшенов
export const { increment, decrement, addTodo, removeLastTodo, filteredTodos } =
  toolkitSlicer.actions;
