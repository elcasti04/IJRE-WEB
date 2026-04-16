/*
  Lideres.jsx
  - Página que muestra los líderes espirituales.
  - Comportamiento:
  * Realiza GET a `/lideres` en el backend al montar.
  * Maneja estados: `loading`, `error` y `lideres`.
  * Si la propiedad `image` empieza con `/` se interpreta como ruta
  * pública del backend y se antepone `http://localhost:3000`.
*/

import axios from 'axios';
import { useEffect, useState } from 'react';

const Lideres = () => {
	const [lideres, setLideres] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:3000/lideres')
			.then((response) => {
				// Si es un array, usarlo directamente; si es un objeto con liders, usar eso
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
			<p style={{ textAlign: 'center', padding: '2rem' }}>
				Cargando líderes espirituales...
			</p>
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
			<h1>Nuestros Líderes Espirituales</h1>
			<p
				style={{
					textAlign: 'center',
					marginBottom: '2rem',
					fontStyle: 'italic',
				}}
			>
				Guías dedicados a servir y fortalecer nuestra comunidad en fe
			</p>
			{lideres.length === 0 ? (
				<p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
					No hay líderes disponibles en este momento.
				</p>
			) : (
				<ul
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
						gap: '1rem',
					}}
				>
					{lideres.map((lider) => (
						<li
							key={lider.id}
							className="fade-in"
							style={{ textAlign: 'center' }}
						>
							<img
								src={
									lider.image && lider.image.startsWith('/')
										? `http://localhost:3000${lider.image}`
										: lider.image
								}
								alt={lider.nombre}
								style={{
									width: '120px',
									height: '120px',
									borderRadius: '50%',
									objectFit: 'cover',
									marginBottom: '1rem',
									border: '4px solid var(--primary-color)',
								}}
							/>
							<h3
								style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}
							>
								{lider.nombre}
							</h3>
							<p
								style={{ fontWeight: 'bold', color: 'var(--secondary-color)' }}
							>
								{lider.cargo}
							</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Lideres;
