import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accueil from './pages/Home/index';
import NosServices from './pages/NosServices/NosServices';
import APropos from './pages/APropos/APropos';
import Tarifs from './pages/tarifs/Tarifs';
import Contact from './pages/Contact/Contact';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/Accueil" component={Accueil} />
                <Route path="/nos-services" component={NosServices} />
                <Route path="/a-propos" component={APropos} />
                <Route path="/tarifs" component={Tarifs} />
                <Route path="/contact" component={Contact} />
                {/* Ajoutez une route par défaut si nécessaire */}
            </Switch>
        </Router>
    );
};

export default App; 