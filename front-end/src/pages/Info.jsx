import axios from 'axios';
import { useEffect, useState } from 'react';
import './style/info.css'

const Info = () => {
	const [infos, setInfos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:3000/info')
			.then((response) => {
				setInfos(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	if (loading)
		return (
			<div style={{ textAlign: 'center', padding: '2rem' }}>
				<img src="../../public/iconos/icons8-load.gif" alt="" />
			</div>
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
		<hr /><hr />
		<main className='info container-fluid text-center'>
			<div className="fade-in">
			<h1>Informes Iglesia Evangelica Jesucristo Rey Eterno</h1>
			

			
			<div className='p-4'>
				{infos.length === 0 ? (
				<p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
					No hay información disponible en este momento.
				</p>
			) : (
				<ul className='contenedor d-flex flex-column justify-content-center container-fluid gap-3'>
					{infos.map((info) => (
						<li key={info.id} className="info-tarjeta">
							<h3>{info.title}</h3>
							<p><i>{info.info}</i></p>
						</li>
					))}
				</ul>
			)}
			</div>
		</div>
		</main>
		</>
	);
};

export default Info;
