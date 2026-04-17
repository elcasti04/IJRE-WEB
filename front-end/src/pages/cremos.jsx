import { useState } from 'react';
const Creemos = () => {
	const [ver, setVer] = useState(false);
	const [credo, setCredo] = useState(false);
	return (
		<>
			<div
				style={{
					background: 'linear-gradient(135deg, #1E4F8A 0%, #58913F 100%)',
				}}
			>
				<h1 style={{color:'white'}}>Lo que creemos</h1>
			</div>
			<div className="contenedor">
				<div className="contenedor-credos">
					<div className="5-solas">
						<h2>5 Solas de la reforma</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
							quasi hic cumque porro inventore illo labore velit fugit deserunt
							fugiat amet culpa exercitationem modi ab animi consequatur commodi
							rerum iure?
						</p>
						<button style={{ cursor: 'pointer' }} onClick={() => setVer(true)}>
							Ver
						</button>
					</div>
					{ver && (
						<div
							onClick={() => setVer(false)}
							style={{
								position: 'fixed',
								width: '100%',
								height: '100%',
								backgroundColor: 'rgba(16, 28, 54, 0.92)',
								top: 0,
								left: 0,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '30px',
							}}
						>
							<div
								style={{
									border: '3px solid var(--primary-color)',
									width: '250px',
									height: '250px',
									boxSizing: 'border-box',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									borderRadius: '20px',
									backgroundColor: '#5d88c0',
									textAlign: 'center',
								}}
							>
								<h2>Solo Escritura</h2>
								<p style={{ fontSize: '18px', color: '#F7F7FB' }}>
									La Biblia es la única autoridad suprema para el creyente.
								</p>
							</div>
							<div
								style={{
									border: '3px solid var(--primary-color)',
									width: '250px',
									height: '250px',
									boxSizing: 'border-box',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									borderRadius: '20px',
									backgroundColor: '#5d88c0',
									textAlign: 'center',
								}}
							>
								<h2>Solo Fé</h2>
								<p style={{ fontSize: '18px', color: '#F7F7FB' }}>
									La salvación se recibe solo por la fe, sin obras.
								</p>
							</div>
							<div
								style={{
									border: '3px solid var(--primary-color)',
									width: '250px',
									height: '250px',
									boxSizing: 'border-box',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									borderRadius: '20px',
									backgroundColor: '#5d88c0',
									textAlign: 'center',
								}}
							>
								<h2>Solo Gracia</h2>
								<p style={{ fontSize: '18px', color: '#F7F7FB' }}>
									La salvación es un regalo gratuito y no merecido de Dios.
								</p>
							</div>
							<div
								style={{
									border: '3px solid var(--primary-color)',
									width: '250px',
									height: '250px',
									boxSizing: 'border-box',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									borderRadius: '20px',
									backgroundColor: '#5d88c0',
									textAlign: 'center',
								}}
							>
								<h2>Solo Cristo</h2>
								<p style={{ fontSize: '18px', color: '#F7F7FB' }}>
									Jesucristo es el único camino y mediador hacia el Padre.
								</p>
							</div>
							<div
								style={{
									border: '3px solid var(--primary-color)',
									width: '250px',
									height: '250px',
									boxSizing: 'border-box',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									borderRadius: '20px',
									backgroundColor: '#5d88c0',
									textAlign: 'center',
								}}
							>
								<h2>Solo a Dios gloria</h2>
								<p style={{ fontSize: '18px', color: '#F7F7FB' }}>
									Toda la gloria y el honor pertenecen solo a Dios.
								</p>
							</div>
						</div>
					)}
				</div>
				<div className="contenedor-credos">
					<div className="credo-niceno">
						<h2>Credo Niceno</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ex
							fugit placeat sit in ut nostrum aliquam, eaque est cupiditate
							voluptate ratione eos necessitatibus, hic soluta autem explicabo a
							earum!
						</p>
						<button className="leer-credo" onClick={() => window.open('')}>
							Leer
						</button>
					</div>
				</div>
				<div className="contenedor-credos">
					<div className="estandares de Westminster">
						<h2>Estandares de Westminster</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ex
							fugit placeat sit in ut nostrum aliquam, eaque est cupiditate
							voluptate ratione eos necessitatibus, hic soluta autem explicabo a
							earum!
						</p>
						<button className="leer-credo" onClick={() => setCredo(true)}>
							Leer
						</button>
						{credo && (
							<div
								onClick={() => setCredo(false)}
								style={{
									position: 'fixed',
									width: '100%',
									height: '100%',
									backgroundColor: 'rgba(20,32,58,0.92)',
									top: 0,
									left: 0,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									gap: '80px',
								}}
							>
								<div
									style={{
										cursor: 'pointer',
										minHeight: '180px',
										maxWidth: '200px',
										backgroundColor: '#142740',
										borderRadius: '20px',
									}}
									onClick={() =>
										window.open('/credo/CatecismoMayordeWestminster.pdf')
									}
								>
									<h2>Catecismo Mayor De Westminster</h2>
									<strong
										style={{
											fontSize: '30px',
											color: 'var(--accent-color)',
											fontWeight: 'bold',
										}}
									>
										Leer ↗
									</strong>
								</div>
								<div
									style={{
										cursor: 'pointer',
										minHeight: '180px',
										maxWidth: '200px',
										backgroundColor: '#142740',
										borderRadius: '20px',
									}}
									onClick={() =>
										window.open('/credo/CatecismoMenordeWestminster.pdf')
									}
								>
									<h2>Catecismo Menor De Westminster</h2>
									<strong
										style={{
											fontSize: '30px',
											color: 'var(--accent-color)',
											fontWeight: 'bold',
										}}
									>
										Leer ↗
									</strong>
								</div>
								<div
									style={{
										cursor: 'pointer',
										minHeight: '180px',
										maxWidth: '200px',
										backgroundColor: '#142740',
										borderRadius: '20px',
									}}
									onClick={() =>
										window.open('/credo/confesion_de_fe_de_westminster.pdf')
									}
								>
									<h2>
										Confesión <br /> de Fé De Westminster
									</h2>
									<strong
										style={{
											fontSize: '30px',
											color: 'var(--accent-color)',
											fontWeight: 'bold',
										}}
									>
										Leer ↗
									</strong>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Creemos;
