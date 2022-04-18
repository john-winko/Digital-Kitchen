import React from 'react';
import ReactDOMClient from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'

const rootElement = document.getElementById("root")
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  // <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>

  // </React.StrictMode>
);

