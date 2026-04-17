import axios from 'axios';
import { useEffect, useState } from 'react';
const BACKEND_URL = 'http://localhost:3000';

const Galeria = () => {
	const [imagenes, setImagenes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [indexActual, setIndexActual] = useState(0);
	const [ministerioSeleccionado, setMinisterioSeleccionado] = useState('Todas');
	const [loaded, setLoaded] = useState(false);

	const ministerios = [
		'Todas',
		'Damas',
		'Caballeros',
		'Juvenil',
		'Actividades',
	];

	useEffect(() => {
		axios
			.get(`${BACKEND_URL}/galeria`)
			.then((response) => {
				setImagenes(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	const normalizeText = (text) => text?.toString().toLowerCase().trim() || '';

	const filteredImages =
		ministerioSeleccionado === 'Todas'
			? imagenes
			: imagenes.filter((item) =>
					normalizeText(item.ministerio).includes(
						normalizeText(ministerioSeleccionado),
					),
				);

	const safeIndex =
		filteredImages.length === 0
			? 0
			: Math.min(indexActual, filteredImages.length - 1);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (filteredImages.length === 0) return;

			if (event.key === 'ArrowLeft') {
				setIndexActual(
					(prev) => (prev - 1 + filteredImages.length) % filteredImages.length,
				);
			}

			if (event.key === 'ArrowRight') {
				setIndexActual((prev) => (prev + 1) % filteredImages.length);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [filteredImages.length]);

	const currentImage = filteredImages[safeIndex];
	const previousIndex =
		filteredImages.length > 1
			? (safeIndex - 1 + filteredImages.length) % filteredImages.length
			: safeIndex;
	const nextIndex =
		filteredImages.length > 1
			? (safeIndex + 1) % filteredImages.length
			: safeIndex;

	const previousImage = () => {
		if (filteredImages.length === 0) return;
		setLoaded(false);
		setIndexActual(
			(prev) => (prev - 1 + filteredImages.length) % filteredImages.length,
		);
	};

	const nextImage = () => {
		if (filteredImages.length === 0) return;
		setLoaded(false);
		setIndexActual((prev) => (prev + 1) % filteredImages.length);
	};

	const getImageUrl = (src) => {
		if (!src) return '';
		return src.startsWith('/') ? `${BACKEND_URL}${src}` : src;
	};

	if (loading)
		return (
			<div style={{ textAlign: 'center', padding: '2rem' }}>
				<img src="/iconos/icons8-load.gif" alt="Cargando..." />
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
			<div className="contenedor">
				<div
					className="titulo"
					style={{width:'100%', backgroundColor: 'var(--primary-color)' }}
				>
					<h1>Galeria</h1>
				</div>
			</div>
			<div
				className="contenedor-galeria"
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '20px',
					alignItems: 'flex-start',
				}}
			>
				<div
					style={{
						minWidth: '220px',
						height: '600px',
						backgroundColor: '#142740',
						width: '220px',
						padding: '10px',
						borderRadius: '16px',
						color: '#fff',
					}}
				>
					<h3 style={{ marginBottom: '24px', textAlign: 'center' }}>
						Ministerios
					</h3>
					{ministerios.map((ministerio) => (
						<button
							key={ministerio}
							style={{
								width: '100%',
								padding: '20px 10px',
								marginBottom: '12px',
								border: 'none',
								borderRadius: '10px',
								backgroundColor:
									ministerioSeleccionado === ministerio
										? 'var(--primary-color)'
										: 'rgba(255,255,255,0.08)',
								color: ministerioSeleccionado === ministerio ? '#fff' : '#ddd',
								cursor: 'pointer',
							}}
							onClick={() => {
								setMinisterioSeleccionado(ministerio);
								setIndexActual(0);
								setLoaded(false);
							}}
						>
							{ministerio}
						</button>
					))}
				</div>
				<div
					className="contenedor-imagenes"
					style={{
						backgroundColor: 'rgba(245,248,252,0.96)',
						width: '100%',
						height: '70  %',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-start',
						padding: '24px',
						borderRadius: '24px',
					}}
				>
					<div
						className="carousel"
						style={{
							width: '100%',
							maxWidth: '900px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '20px',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '20px',
								width: '100%',
							}}
						>
							<div
								style={{
									width: '100%',
									maxWidth: '660px',
									overflow: 'visible',
									borderRadius: '20px',
									boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
									backgroundColor: '#142740',
									position: 'relative',
								}}
							>
								{filteredImages.length === 0 ? (
									<div
										style={{
											padding: '60px 24px',
											textAlign: 'center',
											color: '#fff',
										}}
									>
										No hay imágenes disponibles en este ministerio.
									</div>
								) : (
									<>
										<img
											data-testid="galeria-imagen"
											onLoad={() => setLoaded(true)}
											src={getImageUrl(currentImage?.image)}
											alt={currentImage?.info || 'Imagen de galería'}
											style={{
												width: '100%',
												height: '400px',
												objectFit: 'cover',
												borderRadius: '20px',
												opacity: loaded ? 1 : 0,
												transform: loaded
													? 'translateY(0)'
													: 'translateY(10px)',
												transition: 'opacity 0.35s ease, transform 0.35s ease',
												position: 'relative',
												zIndex: 2,
											}}
										/>
										<img
											data-testid="galeria-anterior"
											onClick={previousImage}
											src={getImageUrl(filteredImages[previousIndex]?.image)}
											alt="Imagen anterior"
											style={{
												position: 'absolute',
												top: '18%',
												left: '-8%',
												width: '180px',
												height: '240px',
												objectFit: 'cover',
												borderRadius: '18px',
												boxShadow: '0 16px 32px rgba(0,0,0,0.4)',
												opacity: 0.92,
												cursor: 'pointer',
												zIndex: 1,
												transform: 'rotate(-4deg)',
											}}
										/>
										<img
											data-testid="galeria-siguiente"
											onClick={nextImage}
											src={getImageUrl(filteredImages[nextIndex]?.image)}
											alt="Imagen siguiente"
											style={{
												position: 'absolute',
												top: '18%',
												right: '-8%',
												width: '180px',
												height: '240px',
												objectFit: 'cover',
												borderRadius: '18px',
												boxShadow: '0 16px 32px rgba(0,0,0,0.4)',
												opacity: 0.92,
												cursor: 'pointer',
												zIndex: 1,
												transform: 'rotate(4deg)',
											}}
										/>
									</>
								)}
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '24px',
								marginTop: '16px',
							}}
						>
							<button
								onClick={previousImage}
								style={{
									padding: '12px 20px',
									borderRadius: '12px',
									border: 'none',
									backgroundColor: 'var(--primary-color)',
									color: '#fff',
									cursor: 'pointer',
								}}
							>
								Anterior
							</button>
							<button
								onClick={nextImage}
								style={{
									padding: '12px 20px',
									borderRadius: '12px',
									border: 'none',
									backgroundColor: 'var(--primary-color)',
									color: '#fff',
									cursor: 'pointer',
								}}
							>
								Siguiente
							</button>
						</div>
						{currentImage?.info && (
							<div
								style={{
									width: '100%',
									maxWidth: '660px',
									backgroundColor: 'rgba(20,32,58,0.65)',
									padding: '16px 20px',
									borderRadius: '20px',
									color: '#fff',
									textAlign: 'center',
									marginTop: '12px',
								}}
							>
								<p style={{ margin: 0, lineHeight: 1.6 }}>
									{currentImage.info}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Galeria;
