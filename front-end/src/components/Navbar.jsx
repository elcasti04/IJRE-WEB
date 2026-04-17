import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const closeMenu = () => setOpen(false);

	return (
		<>
			<button
				className="menu-btn"
				onClick={() => setOpen((prev) => !prev)}
				aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
			>
				<span>{open ? '✕' : '☰'}</span>
			</button>
			{open && <div className="navbar-overlay" onClick={closeMenu} />}
			<nav className={`navbar ${open ? 'activo' : ''}`}>
				<ul className="navbar-links">
					<li style={{ fontSize: '35px' }}>
						<Link to="/" onClick={closeMenu}>
							Inicio
						</Link>
					</li>
					<li>
						<Link to="/nosotros" onClick={closeMenu}>
							<b>Nosotros</b>
						</Link>
					</li>
					<li>
						<Link to="/creemos" onClick={closeMenu}>
							<b>Lo que Creemos</b>
						</Link>
					</li>
					<li>
						<Link to="/info" onClick={closeMenu}>
							<b>Información</b>
						</Link>
					</li>
					<li>
						<Link to="/Galeria" onClick={closeMenu}>
							<b>Galeria</b>
						</Link>
					</li>
					<li>
						<Link to="/videos" onClick={closeMenu}>
							<b>Sermones</b>
						</Link>
					</li>
					<li>
						<Link to="/lideres" onClick={closeMenu}>
							<b>Oficiales</b>
						</Link>
					</li>
					<li>
						<Link to="/Ministerios" onClick={closeMenu}>
							<b>Ministerios</b>
						</Link>
					</li>
					<li>
						<Link to="/Academia" onClick={closeMenu}>
							<b>Academia</b>
						</Link>
					</li>
					<li>
						<Link to="/Iglesias-Asociadas" onClick={closeMenu}>
							<b>Iglesias Asociadas</b>
						</Link>
					</li>
					<li>
						<Link to="/contacto" onClick={closeMenu}>
							<b>Contacto</b>
						</Link>
					</li>
					<li>
						<Link to="/donaciones" onClick={closeMenu}>
							<b>Donaciones</b>
						</Link>
					</li>
					<hr />
					<li>
						<Link to="/login" onClick={closeMenu}>
							<b>Login</b>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
