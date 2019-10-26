const profileReducerState = {
  gender: "",
  age: null,
  weight: null,
  height: null,
  bmi: null,
  viloPuls: 0,
  goal: ""
};

const profileReducer = (state = profileReducerState, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return {
        ...state,
        ...action.updates
      };
    default:
      return state;
  }
};

export default profileReducer;