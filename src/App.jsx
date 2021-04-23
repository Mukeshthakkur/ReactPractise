import React from 'react';
import Movies from './components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Routes/Home';
import Products from './Routes/products';
import Admin from './Routes/admin/Admin';
import Post from './Routes/Post';
import NavBar from './components/navBar';



class App extends React.Component{
  render(){
    return(
      <div>
      <NavBar />
      <Route path="/">Movies</Route>
        <Movies />
      </div>
    )
  }
}



export default App;