import { useState } from 'react';

function Header() {
	const [expandido, setExpandido] = useState(false);
	return (
		<>
			<header className="header">
				<h2 style={{color:'white'}}>Iglesia Evangelica Jesucristo Rey Eterno</h2>
				<img
					onClick={() => setExpandido(true)}
					style={{ height: '80px', borderRadius: '50px', cursor: 'pointer' }}
					src="../../public/img/Logo.jpeg"
					alt="Logo de la iglesia"
				/>
			</header>
			{expandido && (
				<div
					onClick={() => setExpandido(false)}
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background: 'rgba(20,32,58,0.92)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img
						style={{
							width: '600px',
							maxWidth: '90%'
						}}
						src="../../public/img/Logo.jpeg"
						alt="Logo de la iglesia"
					/>
				</div>
			)}
		</>
	);
}

export default Header;
