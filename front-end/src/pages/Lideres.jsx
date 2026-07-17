import axios from 'axios';
import { useEffect, useState } from 'react';
import './style/lideres.css'

const Lideres = () => {
	const [lideres, setLideres] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [infoLider, setInfoLider] = useState(null)


	const API_URL = 'http://localhost:3000/'

	useEffect(() => {
		axios
			.get('http://localhost:3000/lideres')
			.then((response) => {
				setLideres(
					Array.isArray(response.data)
						? response.data
						: response.data.liders || [],
				);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	if (loading)
		return (
			<img style={{display:'flex', textAlign: 'center', padding: '2rem' }} src="../../public/iconos/icons8-load.gif" alt="icono de carga" />
		);
	if (error)
		return (
			<p
				style={{
					textAlign: 'center',
					padding: '2rem',
					color: 'var(--accent-color)',
				}}
			>
				Error: {error}
			</p>
		);

	return (
		<>
		<main className='lideres container'>
			<div className="">
			<h1 className=''>Personas que sirven con amor</h1>
			<p>
				<i>
					Nuestra iglesia es pastoreada por hombres comprometidos con el evangelio y el bienestar de la congregación.
				</i>
			</p>
			<br /><br />
			{lideres.length === 0 ? (
				<p >
					<h2 className='text-danger'>⚠</h2> No hay líderes disponibles en este momento.
				</p>
			) : (
				<div>
					<div className="contenedor  d-flex col justify-content-between ">
						
							

							<div className="demas d-flex p-2 position-relative col">
								<div className='d-flex flex-wrap justify-content-between gap-5 col-12 '>
								{lideres.map((lider) => (
									<div className="liderD p-3 " key={lider.nombre}>
										<img src={`http://localhost:3000${lider.image}`} alt={lider.nombre} />
										<hr />
										<h5 className='cargo'>{lider.cargo}</h5>
										<h5>{lider.nombre}</h5>
										<p onClick={() => setInfoLider(lider.id)} 
										className='bg'>Ver mas</p>


										{infoLider === lider.id && (
											<div  style={{
												position: 'fixed',
												top: 0,
												left: 0,
												width: '100%',
												height: '100%',
												background: 'rgba(20,32,58,1)',
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												zIndex: '1001',
												borderRadius: '12px',
												padding: '4em',
											}}>
												<div className='tarjeta-lider bg-white p-3' >
													<header onClick={(e) => { e.stopPropagation();
											setInfoLider(null)}} className='x text-black'>
												<strong>
													X
												</strong>
												</header>
													<div className='text'>
													<img src={`http://localhost:3000${lider.image}`} alt="" />
													<h5 style={{borderBottom:'1px solid black', width:'50%', top:'10px'}}>{lider.nombre}</h5>
													<h6>{lider.cargo}</h6>
													<p>{lider.info}</p>
													</div>
												</div>
											</div>
										)}
									</div>	
									))}
								</div>
							</div>
						</div>
				</div>
			)}
			
		</div>
		
		</main>
		</>

							
	);
};

export default Lideres;
