import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import 'jquery/dist/jquery.min';
import './App.css';

import React from 'react';
import Header from '../components/ui/Header';
import Showcase from '../components/showcase/Showcase';

const App = () => (
    <div>
        <Header />
        <Showcase />
        <h1>Teste</h1>
        <p>Olá React</p>
    </div>
)

export default App;