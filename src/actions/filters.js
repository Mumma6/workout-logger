// SET_TEXT_FILTER
// if no value is provided the text is an empty string insted of undefiend
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_AMOUNT
export const sortByOldDate = () => ({
  type: "SORT_BY_OLD_DATE"
});

// SORT_BY_DATE
export const sortByNewDate = () => ({
  type: "SORT_BY_NEW_DATE"
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
