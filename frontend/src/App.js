import React from 'react';

//Roteamento
import { Switch, Route } from 'react-router-dom';

//Componentes
import Menu from './Componentes/Componente_Menu';
import PaginaCurriculo from './Paginas/Pagina_Curriculo';
import PaginaContato from './Paginas/Pagina_Contato';
import PaginaInicial from './Paginas/Pagina_Inicial';
import PaginaPortfolio from './Paginas/Pagina_Portfolio';
import Tecnologias from './Componentes/Componente_Tecnologias';
import Imagem from './Componentes/Componente_Imagem'
import { Secao1, Secao2, Secao3, Secao4, Secao5 } from './Estilo/Estilo_Global';

function App() {
  return (
    <div>
      <Secao1>
        <Menu />
      </Secao1>
      <Secao2>
      <Secao3>
        <Switch>
            <Route exact path='/'>
              <PaginaInicial />
            </Route>
            <Route path='/inicial'>
              <PaginaInicial />
            </Route>
            <Route path='/curriculo'>
              <PaginaCurriculo />
            </Route>
            <Route path='/portfolio'>
              <PaginaPortfolio />
            </Route>
            <Route path='/contato'>
              <PaginaContato />
            </Route>
          </Switch>
      </Secao3>
      <Secao4>
        <Imagem />
      </Secao4>
      </Secao2>
      <Secao5>
        <Tecnologias />
      </Secao5>
    </div>
  );
};

export default App;
