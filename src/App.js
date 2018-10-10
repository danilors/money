import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { githubLogout } from "./firebase";
import {
  Main,
  Button,
  Container,
  ButtonGreen,
  TitleContainer
} from "./components";
import List from "./components/List";
import AddSpent from "./components/AddSpent";
import Login from "./components/Login";
import Salary from "./components/Salary";
import { withReducer } from "recompose";

const TOGGLE = "TOGGLE";
const toggleFeature = (flag = false, action) => {
  switch (action.type) {
    case TOGGLE:
      return !flag;
    default:
      return flag;
  }
};

const App = ({ showFeature, dispatch }) => (
  <Provider store={store}>
    <Main>
      {localStorage.getItem("access_token") ? (
        <Container>
          <TitleContainer>
            <h3>Github - Money</h3>
            <Button onClick={() => dispatch({ type: TOGGLE })}>
              {showFeature ? "Hide" : "Show"}
            </Button>
            <ButtonGreen onClick={githubLogout}>Logout</ButtonGreen>
          </TitleContainer>

          {showFeature && (
            <div>
              <Salary />
              <AddSpent />
            </div>
          )}

          <List />
        </Container>
      ) : (
        <Container>
          <Login />
        </Container>
      )}
    </Main>
  </Provider>
);

export default withReducer("showFeature", "dispatch", toggleFeature)(App);
