import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Routes/Home";
import Rentals from "./Routes/Rentals";
import Customer from "./Routes/Customer";
import NotFound from "./Routes/NotFound";
import MovieSave from "./components/MovieSave";
import NavBar from "./Routes/navbar";
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
        <Route path="/customer" component={Customer} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginForm}/>
        <Route pathh="/movie" component={MovieSave} />
        <Route path="/notfound" component={NotFound} />
        <Redirect from="any" to="home" />
        <Redirect to='/notfound' />
        </Switch>
      </div>
    );
  }               
}

export default App;
  