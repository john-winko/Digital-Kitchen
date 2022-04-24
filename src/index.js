import React from 'react';
import ReactDOMClient from 'react-dom/client'
import './index.css';
import App from './App';
import { HashRouter} from "react-router-dom";

const rootElement = document.getElementById("root")
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  // <React.StrictMode>
      <HashRouter>
          <App />
      </HashRouter>

  // </React.StrictMode>
);

