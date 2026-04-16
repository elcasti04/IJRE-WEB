const Nosotros = () => {
	return (
		<>
			<div>
				<div
					style={{
						textAlign: 'center',
						color: 'white',
						background: 'linear-gradient(135deg, #1E4F8A 0%, #13345A 100%)',
						marginBottom:'10px'
					}}
				>
					<h2 style={{ color: 'white', fontSize: '40px' }}>Sobre Nosotros</h2>
				</div>
				<div
					style={{
						background: 'linear-gradient(135deg, #58913F 0%, #1E4F8A 100%)',
					}}
				>
					<h1>Quines somos</h1>
				</div>
			</div>
			<p style={{ textAlign: 'center' }}>
				<strong>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
					veritatis autem ullam quasi dolore sunt mollitia molestias nulla,
					blanditiis earum illum magni possimus consequatur! Ipsum itaque odio
					magni odit. Vel?
				</strong>
			</p>
			<div
				className="mision-vision"
				style={{ display: 'flex', justifyContent: 'center', gap: '230px' }}
			>
				<div className="mision" style={{ padding: '8px', width: '300px' }}>
					<h2>Mision</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
						quasi hic cumque porro inventore illo labore velit fugit deserunt
						fugiat amet culpa exercitationem modi ab animi consequatur commodi
						rerum iure?
					</p>
				</div>
				<div className="vision" style={{ padding: '8px', width: '300px' }}>
					<h2>Vision</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
						quasi hic cumque porro inventore illo labore velit fugit deserunt
						fugiat amet culpa exercitationem modi ab animi consequatur commodi
						rerum iure?
					</p>
				</div>
			</div>
			<footer
				style={{
					padding: '120px 100px 0px 0px',
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<ul style={{ display: 'flex', gap: '30rem', listStyle: 'none' }}>
					<li>
						<h2>
							<img
								src="../../iconos/icons8-location.gif"
								alt="icono de ubicacion"
							/>{' '}
							San Pedro Sucre (Colombia)
						</h2>
					</li>

					<li>
						<h2>
							<img
								src="../../iconos/icons8-calendar.gif"
								alt="icono de calendario"
							/>{' '}
							Servicios
						</h2>

						<h3></h3>
						<ul>
							<li>Domingos 9 A.M</li>
							<li>Miercoles 7 P.M</li>
							<li>Sabados 6 P.M (juvenil)</li>
						</ul>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Nosotros;
