import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	
	return (


		<nav className="navbar">
			{/* Lista de enlaces principales de la app. Usar <Link> evita
				recargar y permite navegación cliente (SPA). */}
			<ul className="navbar-links">
				<li style={{ fontSize: '35px' }}>
					<Link to="/" target=''>Inicio</Link>
				</li>
				<li>
					<Link to="/nosotros"><b>Nosotros</b></Link>
				</li>
				<li>
					<Link to="/creemos"><b>Lo que Creemos</b></Link>
				</li>
				<li>
					<Link to="/info"><b>Información</b></Link>
				</li>
				<li>
					<Link to="/Galeria"><b>Galeria</b></Link>
				</li>
				<li>
					<Link to="/videos"><b>Sermones</b></Link>
				</li>
				
				<li>
					<Link to="/lideres"><b>Oficiales</b></Link>
				</li>
				

				<li>
					<Link to="/Ministerios"><b>Ministerios</b></Link>
				</li>
				<li>
					<Link to="/Academia"><b>Academia</b></Link>
				</li>
				<li>
					<Link to="/Iglesias-Asociadas"><b>Iglesias Asociadas</b></Link>
				</li>
				<li>
					<Link to="/contacto"><b>Contacto</b></Link>
				</li>
				<li>
					<Link to="/donaciones"><b>Donaciones</b></Link>
				</li>

				<br />
				<hr />

				<li>
					<Link to="/login"><b>Login Autorizado</b> </Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
