import './style/nosotros.css'

const Nosotros = () => {
	return (
		<>
			<main className="nosotros container col">
				<h1 className=''>Somos una familia que ama la <br />Palabra de Dios</h1>
				<p className=''>
					<i>
						Somos una congregación reformada en San Pedro, Sucre. Creemos 
						que la Biblia es la autoridad suprema para la fe y la vida, 
						y queremos que cada persona que llegue encuentre un hogar espiritual.
					</i>
				</p>
			<div
				className="mision-vision col d-flex gap-5 ">
				<div className="mision col-12 col-lg-6  p-2" >
					<h4>Nuestra Mision</h4>
					
					<p>Predicar el evangelio con fidelidad</p>
					<p>
						Glorificar a Dios anunciando las buenas nuevas de Jesucristo, 
						edificando creyentes en la fe reformada y sirviendo con amor a nuestra comunidad.
					</p>
				</div>
				<div className="vision col-12 col-lg-6  p-2" >
					<h4>Nuestra Vision</h4>
					
					<p>Multiplicar iglesias fieles en la Costa</p>
					<p>
						Ser un modelo de iglesia saludable que multiplique congregaciones 
						comprometidas con la Escritura en toda la Costa Caribe colombiana.
					</p>
				</div>
			</div>
			<div className='footer col d-flex flex-wrap '>
					<div className='ubi col-12 col-lg-6'>
							<img
								src="../../iconos/icons8-location.gif"
								alt="icono de ubicacion"
							/>
							<p>San Pedro Sucre (Colombia) {' '}
							<span className='text-decoration-underline'
							onClick={() => window.open('https://maps.app.goo.gl/2rr1qbBptamywnvYA')}>ver mapa ↗</span>
							</p>
					</div>
				
			</div>
			</main>
		</>
	);
};

export default Nosotros;
