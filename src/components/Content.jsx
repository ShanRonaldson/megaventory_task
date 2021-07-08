import React from "react";

import { Switch, Route, useLocation, NavLink } from "react-router-dom";
import { Task } from "../pages/Task";
import { TaskInfo } from "../pages/TaskInfo";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export function Content() {
  let location = useLocation();

  return (
    <div className="nav">
      <div className="nav--Router">
        <ul className="nav--list">
          <NavLink
            exact
            activeClassName="active"
            to="/orders"
            className="nav--list-item"
          >
            Orders
          </NavLink>

          <NavLink
            activeClassName="active"
            to="/taskInfo"
            className="nav--list-item"
          >
            Task Information
          </NavLink>
        </ul>

        <hr />

        <div className="nav--Router-content">
          <TransitionGroup>
            <CSSTransition
              appear
              in
              timeout={400}
              classNames="slide"
              key={location.key}
            >
              <Switch location={location}>
                <Route path="/orders" children={<Task />} />
                <Route path="/taskInfo" children={<TaskInfo />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}
