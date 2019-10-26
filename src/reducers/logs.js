const logsReducerState = [];

const logsReducer = (state = logsReducerState, action) => {
  switch (action.type) {
    case "ADD_LOGS":
      return [...state, action.log];
    case "REMOVE_LOG":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_LOG":
      return state.map(log => {
        if (log.id === action.id) {
          return {
            ...log,
            ...action.updates
          };
        } else {
          return log;
        }
      });
    default:
      return state;
  }
};


export default logsReducer