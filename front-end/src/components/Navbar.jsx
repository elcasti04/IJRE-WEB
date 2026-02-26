/*
  Navbar.jsx
  - Componente de navegación superior.
  - Usa `react-router-dom` para links internos (no recarga la página).
  - La apariencia está en `src/components/Navbar.css`.
*/

import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	// Componente funcional simple que renderiza enlaces a las páginas
	return (
		<nav className="navbar">
			{/* Marca/Logo - enlaza a la ruta raíz */}
			<div className="navbar-brand">
				<Link to="/">Jesucristo Rey Eterno</Link>
			</div>

			{/* Lista de enlaces principales de la app. Usar <Link> evita
				recargar y permite navegación cliente (SPA). */}
			<ul className="navbar-links">
				<li>
					<Link to="/">Inicio</Link>
				</li>
				<li>
					<Link to="/info">Info</Link>
				</li>
				<li>
					<Link to="/videos">Videos</Link>
				</li>
				<li>
					<Link to="/lideres">Líderes</Link>
				</li>
				<li>
					<Link to="/nosotros">Nosotros</Link>
				</li>
				<li>
					<Link to="/contacto">Contacto</Link>
				</li>
				<li>
					<Link to="/donaciones">Donaciones</Link>
				</li>
				<li>
					<Link to="/creemos">Lo que Creemos</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
