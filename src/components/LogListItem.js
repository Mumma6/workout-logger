import React from 'react'
import { removeLogs } from "../actions/logs"
import { connect } from "react-redux"

const LogListItem = ({ description, vikt, createdAt, id, dispatch }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>{vikt}</p>
      <p>{createdAt}</p>
      <button onClick={() => dispatch(removeLogs({ id }))}>Remove</button>
    </div>
  )
}

export default connect()(LogListItem)
