import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Characters from '../Pages/Characters';
import Episodes from '../Pages/Episodes';
import Home from '../Pages/Home';
import InfoCharacter from '../Pages/InfoCharacter';
import InfoEpisode from '../Pages/InfoEpisode';
import InfoLocations from '../Pages/InfoLocations';
import Location from '../Pages/Location';
import Footer from './Footer';
import Header from './Header';

const MainRouter = () =>{
    return(
        <>
            <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/Personajes" component={Characters}></Route>
                <Route exact path="/Personajes/:name" component={InfoCharacter}></Route>
                <Route exact path="/Locaciones" component={Location}></Route>
                <Route exact path="/Locaciones/:name" component={InfoLocations}></Route>
                <Route exact path="/Episodios" component={Episodes}></Route>
                <Route exact path="/Episodios/:name" component={InfoEpisode}></Route>
            </Switch>
            <Footer/>
            </Router>
        </>
    )
}

export default MainRouter