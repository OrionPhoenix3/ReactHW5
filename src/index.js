import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import RouterApp from "./components/router/RouterApp";
import './styles/index.scss';
import {CardsProvider} from "./components/context/CardsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <CardsProvider>
              <RouterApp/>
          </CardsProvider>
      </Router>
  </React.StrictMode>
);
