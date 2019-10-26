import React from 'react'
import { connect } from "react-redux"
import {setTextFilter, sortByNewDate, sortByOldDate} from "../actions/filters"

const LogListFilters = (props) => {
  return (
    <div>
      <input type="text" value={props.filters.text} onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value))
      }}/>
      <select
        value={props.filters.sortyBy}
        onChange={(e) => {
          if (e.target.value === "New - Old") {
            props.dispatch(sortByNewDate());
          } else if (e.target.value === "Old - New") {
            props.dispatch(sortByOldDate())
          }
        }}
        >
          <option value="Old - New">Old - New</option>
          <option value="New - Old">New - Old</option>
        </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(LogListFilters)
