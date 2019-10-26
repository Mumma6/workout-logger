// Get visible logs
// behöver man kunna filtera på text? eller räcker det med dates
const getVisibleLogs = (logs, { text, sortBy, startDate, endDate }) => {
  return logs.filter((log) => {
    const startDateMatch = typeof startDate !== "number" || log.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number" || log.createdAt <= endDate;
    const textMatch = log.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === "Old - New") {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if(sortBy === "New - Old") {
      return a.createdAt > b.createdAt ? 1 : -1;
    }
  
  })
}

export default getVisibleLogs