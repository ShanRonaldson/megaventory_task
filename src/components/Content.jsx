import React from "react";
import styled from "styled-components";

import { Switch, Route, useLocation, NavLink } from "react-router-dom";
import { Task } from "../pages/Task";
import { TaskInfo } from "../pages/TaskInfo";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Styles

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
`;

export function Content() {
  let location = useLocation();

  return (
    <div className="nav">
      <div className="nav--Router">
        <StyledNav className="nav--list">
          <NavLink
            exact
            activeClassName="active"
            to="/home"
            className="nav--list-item"
          >
            Task
          </NavLink>

          <NavLink
            activeClassName="active"
            to="/taskInfo"
            className="nav--list-item"
          >
            Task Information
          </NavLink>
        </StyledNav>

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
                <Route path="/home" children={<Task />} />
                <Route path="/taskInfo" children={<TaskInfo />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}
