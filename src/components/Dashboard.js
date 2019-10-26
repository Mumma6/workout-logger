import React from 'react'
import LogList from "./LogList";
import LogListFilters from "./LogListFilters";

const Dashboard = () => {
  return (
    <div>
      <LogListFilters />
      <LogList />
    </div>
  )
}

export default Dashboard
