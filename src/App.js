import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import EditPage from "./components/EditPage";
import Help from "./components/Help";
import NotFound from "./components/NotFound";

import "./App.css";

// redux
import reduxStore from "./store/store";

// actions
import { addLogs } from "./actions/logs";
import { updateProfile } from "./actions/profile";


const store = reduxStore();

store.dispatch(addLogs({ description: "Test", vikt: 10, createdAt: 1002 }));
store.dispatch(addLogs({ description: "nummer 2", vikt: 100, createdAt: 2000 }));
store.dispatch(addLogs({ description: "löpning", vikt: 1010, createdAt: 24000 }));


store.dispatch(updateProfile({ gender: "Male", age: 28 }));

store.dispatch(updateProfile({ height: 178, weight: 80 }));


console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/edit/:id" component={EditPage} />
            <Route exact path="/help" component={Help} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
