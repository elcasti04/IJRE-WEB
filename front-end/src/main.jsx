/*
  main.jsx
  - Punto de arranque de la aplicación React.
  - Se carga `index.css`, se configura `axios` para enviar cookies
    (útil para sesiones autenticadas con `withCredentials`) y se monta `App`.
*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import axios from 'axios';

// Por defecto, axios enviará cookies junto con las peticiones.
axios.defaults.withCredentials = true;

// Montaje de React en el elemento con id 'root'
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
