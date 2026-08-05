import './style/inicio.css'

const Inicio = () => {
	return (
		<>
			<div
				className="Inicio text-center col "
			>
				
				<h1 className="inicio-titulo">
					Iglesia Evangelica <br /> Jesucristo Rey Eterno
				</h1>
				
				<h3 className='siglas'>IEJRE - IREP</h3>

				<div className='espacio'>

				</div>
				<p className='cita'>
					Porque de él, y por él, y para él, <br /> son todas las cosas.
					A él sea la gloria por los siglos. 
					<br /> Amén.
				</p>
				<h4>Romanos 11:36</h4>
				<br />

				<div className='botones'>
				<h4><a href="#Nosotros">♱ Conocenos ♱</a></h4>
				<h4><a href="#Contacto">♱ Contactanos ♱</a></h4>
				<h4><a href="#Videos">♱ Sermones ♱</a></h4>
				</div>
			</div>
			<div className='servicios col'>
					<ul className='d-flex text-center col-12'>
						<li className='col-4 col-md-5'>
							<p>Domingos <br />
								<strong>9:00 A.M </strong>
								<span>Culto de Adoracion</span>
							</p>
							
							
						</li>
						<li className='col-4 col-md-2'
						style={{borderLeft: '2px solid black', borderRight: '2px solid black'}}>
							<p>Miercoles <br />
								<strong>7:00 P.M </strong>
								<span>Estudio Biblico</span>
							</p>
						</li>
						
						<li className='col-4 col-md-5'>
							<p>Sabados <br />
								<strong>6:00 P.M </strong>
								<span>Grupo Juvenil</span>
							</p>
							
						</li>
					</ul>
				</div>
		</>
	);
};

export default Inicio;
