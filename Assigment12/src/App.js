import React from "react";
import classes from "./App.module.scss";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Students from "./containers/students";
import StudentForm from "./containers/studentForm";
import LabeledValue from "../../Assigment11/src/components/labeledValue";
import HeaderComponent from "../../Assigment11/src/components/header";

const GlobalStyle = createGlobalStyle`
  body{
    @import url('https://fonts.googleapis.com/css?family=Sarabun');
    font-family: 'Sarabun', sans-serif;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  background-color: #ffffff;
  padding: 15px;
`;

const HeaderNavItem = styled.div`
  margin: 5px 5px 0px 5px;
  color: ${props => (props.active ? "#353a46" : "#656a76")};
  font-weight: ${props => (props.active ? "550" : "300")};
  border-bottom: ${props => (props.active ? "2px solid #353a46" : "")};
  line-height: 24px;
  padding: 0px 2px;
  height: 24px;
`;

const App = props => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <NavLink
          className={classes.HeaderNavItem}
          to="/components/labeledValue"
          activeClassName={classes.HeaderNavItemActive}
        >
          Labeled Value Component
        </NavLink>
        <NavLink
          to="/components/header"
          className={classes.HeaderNavItem}
          activeClassName={classes.HeaderNavItemActive}
        >
          Header Component
        </NavLink>
        <NavLink
          to="/students"
          exact
          className={classes.HeaderNavItem}
          activeClassName={classes.HeaderNavItemActive}
        >
          Students
        </NavLink>
      </Header>
      <Route exact path="/students" component={Students} />
      <Route exact path="/students/new" component={StudentForm} />
      <Route exact path="/students/:id/edit" component={StudentForm} />
      <Route
        exact
        path="/components/labeledValue"
        render={() => <LabeledValue label="Label" value="Value" />}
      />
      <Route
        exact
        path="/components/header"
        render={() => (
          <Header label="Label" value="Value">
            Header
          </Header>
        )}
      />
    </>
  );
};

export default App;
