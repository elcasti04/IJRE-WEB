/*
  Info.jsx
  - Muestra una lista de entradas informativas traídas desde el backend.
  - Comportamiento:
	* Al montar, realiza GET a `http://localhost:3000/info`.
	* Maneja estados: `loading`, `error` e `infos`.
	* Renderiza mensajes de carga/errores y la lista cuando está disponible.
  - Nota: el formato esperado del backend es un array de objetos con
	{ id, title, info }.
*/

import axios from 'axios';
import { useEffect, useState } from 'react';

const Info = () => {
	// Estado para los items de información
	const [infos, setInfos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Petición al endpoint `/info` del backend
		axios
			.get('http://localhost:3000/info')
			.then((response) => {
				// Se asume que `response.data` es un array
				setInfos(response.data);
				setLoading(false);
			})
			.catch((error) => {
				// Guardar mensaje de error para mostrar al usuario
				setError(error.message);
				setLoading(false);
			});
	}, []);

	if (loading)
		return (
			<p style={{ textAlign: 'center', padding: '2rem' }}>
				Cargando información espiritual...
			</p>
		);
	if (error)
		return (
			<p style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
				Error: {error}
			</p>
		);

	return (
		<div className="fade-in" style={{ padding: '2rem' }}>
			<h1>Información Espiritual</h1>
			<p
				style={{
					textAlign: 'center',
					marginBottom: '2rem',
					fontStyle: 'italic',
				}}
			>
				Descubre enseñanzas y reflexiones que fortalecen tu fe
			</p>

			{/* Si no hay items, mostrar mensaje amigable */}
			{infos.length === 0 ? (
				<p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
					No hay información disponible en este momento.
				</p>
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
