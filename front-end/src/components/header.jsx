import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/style/header.css'


function Header() {
	const [expandido, setExpandido] = useState(false);
	const [menu, setMenu] = useState(false);
	const [showHeader, setShowHeader] = useState(false);
	const closeMenu = () => setMenu(false);
	const navigate = useNavigate()

	useEffect(() => {
    const handleScroll = () => {
        const debeMostrarse = window.scrollY > 20;

        setShowHeader((estadoAnterior) => {
            if (estadoAnterior !== debeMostrarse) {
                return debeMostrarse;
            }
            return estadoAnterior;
        });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
	}, []);
	useEffect(() => {
		document.body.style.paddingTop = showHeader ? '100px' : '0';
		return () => {
			document.body.style.paddingTop = '0';
		};
	}, [showHeader]);

	return (
		<>
			<header className={`head ${showHeader ? 'head-visible' : 'head-hidden'}`}>
				<img
					className='logo'
					onClick={() => setExpandido(true)}
					src="img/logo.jpeg"
					alt="Logo de la iglesia"
				/>
				<h2 className=' col-6 '><a className='titulo' href="#Inicio">Iglesia Evangelica Jesucristo Rey Eterno</a></h2>
				
				<div className='menu-btn '
					onClick={() => menu ? setMenu(false) : setMenu(true)}>
					<img src="iconos/menu.png" alt="boton-toogle" />
				</div>
			</header>

			{menu && (
				<div 
				onClick={() => setMenu(false)}
				style={{
						position: 'fixed',
						top: 1,
						left: 1,
						width: '100vw',
						height: '100vh',
						backgroundColor: 'rgba(0,0,0,0.5)',
						zIndex: 1001,
						display: 'flex',
						justifyContent: 'flex-end',
					}}>
					<ul className="navbar-links" >

									<li style={{ fontSize: '35px' }}>
										<a href="#Inicio" onClick={closeMenu}>Inicio</a>
										</li>
										<li>
										<a href="#Nosotros" onClick={closeMenu}>
											Nosotros
										</a>
										</li>
										<li>
										<a href="#Creemos" onClick={closeMenu}>
											Lo que Creemos
										</a>
										</li>
										<li>
										<a href="#Galeria" onClick={closeMenu}>
											Galería
										</a>
										</li>
										<li>
										<a href="#Videos" onClick={closeMenu}>
											Sermones
										</a>
										</li>
										<li>
										<a href="#Lideres" onClick={closeMenu}>
											Oficiales
										</a>
										</li>
										<li>
										<a href="#Ministerios" onClick={closeMenu}>
											Ministerios
										</a>
										</li>
										<li>
										<a href="#Academia" onClick={closeMenu}>
											Academia
										</a>
										</li>
										<li>
										<a href="#Iglesias" onClick={closeMenu}>
											Iglesias Asociadas
										</a>
										</li>
										<li>
										<a href="#Contacto" onClick={closeMenu}>
											Contacto
										</a>
										</li>
										
										<hr />
										<li style={{ fontSize: '20px' }}>
										<h4 onClick={() => navigate('/Login')}>
											🔴 Login
										</h4>
										<p style={{fontSize:'15px'}}>personal Autorizado</p>
										</li>
									</ul>
				</div>
			)}
			{expandido && (
				<div
					onClick={() => setExpandido(false)}
					style={{
						flexDirection: 'column',
						position: 'fixed',
						top: 0,
						left: 0,
						borderRadius:'12px',
						width: '100%',
						height: '100%',
						background: 'rgba(20,32,58,0.92)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						zIndex: '1001',
						textAlign:'center',
					}}
				>
					<h4 style={{color:'white'}}>Presione cualquier lugar para cerrar</h4>

					<img
						style={{
							width: '600px',
							maxWidth: '90%'
						}}
						src="img/Logo2.jpeg"
						alt="Logo de la iglesia"
					/>
				</div>
			)}
		</>
	);
}

export default Header;
