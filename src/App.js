import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Info from './components/Info';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Form></Form>
        <Switch>
          <Route exact path="/:cat/:id">
            <Info></Info>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
