import axios from 'axios';
import { useEffect, useState } from 'react';

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
		<div className="fade-in" style={{ padding: '2rem' }}>
			<h1>Informes Iglesia Evangelica Jesucristo Rey Eterno</h1>
			<p
				style={{
					textAlign: 'center',
					marginBottom: '2rem',
					fontStyle: 'italic',
					fontSize: '30px',
				}}
			>
				Informes
			</p>

			{/* Si no hay items, mostrar mensaje amigable */}
			{infos.length === 0 ? (
				<strong style={{ textAlign: 'center', fontSize: '1.2rem' }}>
					No hay información disponible en este momento.
				</strong>
			) : (
				<ul>
					{infos.map((info) => (
						<li key={info.id} className="fade-in">
							{/* Título e información; estilos inline para simplicidad */}
							<h3 style={{ color: 'var(--accent-color)' }}>{info.title}</h3>
							<p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
								{info.info}
							</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Info;
