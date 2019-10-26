import React from "react";
import { connect } from "react-redux";
import LogListItem from "./LogListItem";
import selectLogs from "../selectors/logs";

const LogList = props => (
  <div>
    <h1>workouts</h1>
    {props.logs.map((log) => {
      return <LogListItem key={log.id} {...log} />
    })}
  </div>
);

const mapStateToProps = state => ({
  logs: selectLogs(state.logs, state.filters)
});

export default connect(mapStateToProps)(LogList);
