// reducer function
export default (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "SET_EDITING_TASK":
      return { ...state, editingTask: action.payload }; // Update editingTask

    default:
      return state;
  }
};
