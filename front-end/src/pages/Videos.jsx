import axios from 'axios';
import { useEffect, useState } from 'react';

const Videos = () => {
	const [videos, setVideos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:3000/videos')
			.then((response) => {
				setVideos(response.data);
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
				Cargando recursos espirituales...
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
			<h1>Recursos</h1>
			<p
				style={{
					textAlign: 'center',
					marginBottom: '2rem',
					fontStyle: 'italic',
				}}
			>
				Inspírate con mensajes de fe y esperanza
			</p>

			{/* Si no hay videos mostrar mensaje */}
			{videos.length === 0 ? (
				<p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
					No hay recursos disponibles en este momento.
				</p>
			) : (
				<ul
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: '1rem',
					}}
				>
					{videos.map((video) => (
						<li
							key={video.videoId}
							className="fade-in"
							style={{ textAlign: 'center' }}
						>
							{/* Miniatura del video */}
							<img
								src={video.thumbnail}
								alt={video.title}
								style={{
									width: '100%',
									borderRadius: 'var(--border-radius)',
									marginBottom: '1rem',
								}}
							/>

							{/* Título y fecha */}
							<h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
								{video.title}
							</h3>
							<p
								style={{
									fontSize: '0.9rem',
									color: 'var(--light-text)',
									marginBottom: '1rem',
								}}
							>
								Publicado: {new Date(video.published).toLocaleDateString()}
							</p>

							{/* Enlace externo a YouTube */}
							<a
								href={video.link}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									display: 'inline-block',
									padding: '0.5rem 1rem',
									background: 'var(--primary-color)',
									color: 'white',
									borderRadius: 'var(--border-radius)',
									textDecoration: 'none',
								}}
							>
								Ver en YouTube
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Videos;
