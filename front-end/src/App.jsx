/*
	App.jsx
	- Punto de entrada de rutas del frontend.
	- Define el enrutamiento con `react-router-dom` y monta la `Navbar`.
	- Cada `Route` carga una página (componentes en `src/pages`).
	- No maneja estado global; sirve como contenedor de rutas.
*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Info from './pages/Info';
import Videos from './pages/Videos';
import Lideres from './pages/Lideres';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Donaciones from './pages/Donaciones';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div style={{ flex: 1, overflowY: 'auto' }}>
					<Routes>
						{/* Rutas principales de la aplicación. Cada ruta renderiza
						   un componente de la carpeta `src/pages`. */}
						<Route path="/" element={<Inicio />} />
						<Route path="/info" element={<Info />} />
						<Route path="/videos" element={<Videos />} />
						<Route path="/lideres" element={<Lideres />} />
						<Route path="/nosotros" element={<Nosotros />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route path="/donaciones" element={<Donaciones />} />
						<Route path="/login" element={<Login />} />
						<Route path="/admin" element={<Admin />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
