const initialState = [];

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ELEMENT":
      return [...state, action.payload];
    default:
      return state;
  }
}
//сделать вывод элементов + комбайн редьюсер
