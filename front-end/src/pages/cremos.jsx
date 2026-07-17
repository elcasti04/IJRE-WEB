import { useState } from 'react';
import './style/creemos.css'

const Creemos = () => {
	const [ver, setVer] = useState(false);
	const [credo, setCredo] = useState(false);
	const solas = [
		{
			sola:'Solo Escritura',
			texto:'La Biblia es la única autoridad suprema para el creyente.'
		},
		{
			sola:'Solo Fé',
			texto:'La salvación se recibe solo por la fe, sin obras.'
		},
		{
			sola:'Solo Gracia',
			texto:'La salvación es un regalo gratuito y no merecido de Dios.'
		},
		{
			sola:'Solo Cristo',
			texto:'Jesucristo es el único camino y mediador hacia el Padre.'
		},
		{
			sola:'Solo a Dios gloria',
			texto:'Toda la gloria y el honor pertenecen solo a Dios.'
		},
	]
	return (
		<>
		
			<main className="creemos container">
				<h1 className=''>Anclados en la fe histórica</h1>
				<p>
					Nuestra doctrina se basa en las grandes confesiones de la Reforma y en la enseñanza bíblica a través de los siglos.
				</p>
			<div className="contenedor col p-5 gap-3">
				<div className="contenedor-credos col-12 col-md-3 col-lg-3 p-2">
					
						<h2>5 Solas de la reforma</h2>
						<hr />
						<p>
							Sola Scriptura, Sola Fide, Sola Gratia, Solus Christus, Soli Deo Gloria. Estos cinco principios resumen el corazón de la fe evangélica reformada.
						</p>
						<button className='leer-credo text-white' onClick={() => setVer(true)}>
							Ver
						</button>
						{ver && (
						
						<div className='fondo container-fluid' >
							<h2 onClick={() => setVer(false)} 
							style={{color:'white', textAlign:'end', cursor:'pointer'}}>x</h2>
							<ul >
								{solas.map((sola, index) => (
									<li className='solas' key={index}>
										<h2>{sola.sola}</h2>
										<p>{sola.texto}</p>
									</li>
								))}
							</ul>
						</div>
					)}
					
				</div>
				<div className="contenedor-credos col-12 col-md-3 col-lg-3 p-2">
					
						<h2>Credo Niceno</h2>
						<hr />
						
						<p>
							Confesamos la fe apostólica expresada en el Credo Niceno, fundamento común de la ortodoxia cristiana universal a través de los siglos.
						</p>
						<button className="leer-credo text-white" onClick={() => window.open('')}>
							Leer
						</button>
					
				</div>
				<div className="contenedor-credos col-12 col-md-3 col-lg-3 p-2">
					
						<h2>Estandares de Westminster</h2>
						<hr />
						
						<p>
							Nuestra doctrina se basa en las grandes confesiones de la Reforma y en la enseñanza bíblica a través de los siglos.
						</p>
						<button className="leer-credo text-white" onClick={() => setCredo(true)}>
							Leer
						</button>
						{credo && (
							<div className="fondo" >
								<h2 onClick={() => setCredo(false)}
								style={{color:'white', textAlign:'end', cursor:'pointer'}}>x</h2>
								<div className='solas'
									onClick={() => 
										window.open('/credo/CatecismoMayordeWestminster.pdf')}>
									<h2>Catecismo Mayor De Westminster</h2>
									<strong>Leer ↗</strong>
								</div>
								<div className='solas'
									onClick={() =>
										window.open('/credo/CatecismoMenordeWestminster.pdf')}>

									<h2>Catecismo Menor De Westminster</h2>
									<strong>Leer ↗</strong>
								</div>
								<div className='solas'
									onClick={() =>
										window.open('/credo/confesion_de_fe_de_westminster.pdf')}>
									<h2>
										Confesión <br /> de Fé De Westminster
									</h2>
									<strong>Leer ↗</strong>
								</div>
							</div>
						)}
					</div>
			</div>
			</main>
		</>
	);
};

export default Creemos;
