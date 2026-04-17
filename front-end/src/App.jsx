/*
	App.jsx
	- Punto de entrada de rutas del frontend.
	- Define el enrutamiento con `react-router-dom` y monta la `Navbar`.
	- Cada `Route` carga una página (componentes en `src/pages`).
	- No maneja estado global; sirve como contenedor de rutas.
*/

import { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Info from './pages/Info';
import Videos from './pages/Videos';
import Nosotros from './pages/Nosotros';
import Lideres from './pages/Lideres';
import Contacto from './pages/Contacto';
import Donaciones from './pages/Donaciones';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Creemos from './pages/cremos';
import Header from './components/header';
import Iglesias from './pages/Iglesias';
import Galeria from './pages/Galeria';
import Ministerios from './pages/ministerios';
import Academia from './pages/Academia';

const MobileScrollPages = () => {
	return (
		<div className="mobile-sections">
			<section className="mobile-section">
				<Inicio />
			</section>
			<section className="mobile-section">
				<Nosotros />
			</section>
			<section className="mobile-section">
				<Creemos />
			</section>
			<section className="mobile-section">
				<Info />
			</section>
			<section className="mobile-section">
				<Lideres />
			</section>
			<section className="mobile-section">
				<Ministerios />
			</section>
			<section className="mobile-section">
				<Academia />
			</section>
			<section className="mobile-section">
				<Iglesias />
			</section>
			<section className="mobile-section">
				<Contacto />
			</section>
			<section className="mobile-section">
				<Donaciones />
			</section>
		</div>
	);
};

function AppContent() {
	const [isMobile, setIsMobile] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768);
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const isMobileHome = isMobile && location.pathname === '/';

	return (
		<div className="App">
			<Navbar />

			<div className="content">
				<Header />
				<div className="page">
					{isMobileHome ? (
						<MobileScrollPages />
					) : (
						<Routes>
							<Route path="/" element={<Inicio />} />
							<Route path="/info" element={<Info />} />
							<Route path="/videos" element={<Videos />} />
							<Route path="/nosotros" element={<Nosotros />} />
							<Route path="/lideres" element={<Lideres />} />
							<Route path="/contacto" element={<Contacto />} />
							<Route path="/donaciones" element={<Donaciones />} />
							<Route path="/login" element={<Login />} />
							<Route path="/admin" element={<Admin />} />
							<Route path="/creemos" element={<Creemos />} />
							<Route path="/Iglesias-Asociadas" element={<Iglesias />} />
							<Route path="/Galeria" element={<Galeria />} />
							<Route path="/Ministerios" element={<Ministerios />} />
							<Route path="/Academia" element={<Academia />} />
						</Routes>
					)}
				</div>
			</div>
		</div>
	);
}

function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}

export default App;
