import uuid from "uuid";

// ADD_lOGS
export const addLogs = ({
  description = "",
  puls = 0,
  vikt = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_LOGS",
  log: {
    id: uuid(),
    description,
    puls,
    vikt,
    createdAt
  }
});

// REMOVE_LOGS
export const removeLogs = ({ id } = {}) => ({
  type: "REMOVE_LOG",
  id
});

// EDIT_LOG
export const editLog = (id, updates) => ({
  type: "EDIT_LOG",
  id,
  updates
});

