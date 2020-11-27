import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import AllMovies from './AllMovies';
import Hollywood from './Hollywood';
import Topmovies from './Topmovies';
import NewMovies from './NewMovies';
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={AllMovies} />
      <Route exact path="/topmovies" component={Topmovies} />
      <Route exact path="/hollywood" component={Hollywood} />
      <Route exact path="/newmovies" component={NewMovies} />
    </Switch>
    <br></br>
    <Footer />
    </>
  );
}

export default App;
