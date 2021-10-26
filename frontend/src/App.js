import React from 'react'

//Global estilo
import GlobalStyle from './components/GlobalStyle';

//Roteamento
import { Route, Switch } from 'react-router-dom'

//Componentes
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <AboutUs />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/contato'>
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
