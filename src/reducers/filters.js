const filtersReducerState = {
  text: "",
  sortBy: "Old - New",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_OLD_DATE":
      return {
        ...state,
        sortBy: "Old - New"
      };
    case "SORT_BY_NEW_DATE":
      return {
        ...state,
        sortBy: "New - Old"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

export default filtersReducer