import axios from 'axios';
import { useEffect, useState } from 'react';
const API_URL = import.meta.env.VITE_API_URL
import './style/galeria.css'

const Galeria = () => {
	const [imagenes, setImagenes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [indexActual, setIndexActual] = useState(0);
	const [ministerioSeleccionado, setMinisterioSeleccionado] = useState('Todo');
	const [loaded, setLoaded] = useState(false);
	const [slideKey, setSlideKey] = useState(0);

	useEffect(() => {
		axios
			.get(`${API_URL}/galeria`)
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
		ministerioSeleccionado === 'Todo'
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

	const currentImage = filteredImages[safeIndex];

	useEffect(() => {
		setIndexActual(0);
		setLoaded(false);
		setSlideKey((prev) => prev + 1);
	}, [ministerioSeleccionado]);

	useEffect(() => {
		if (filteredImages.length <= 1) return;

		const interval = setInterval(() => {
			setIndexActual((prev) => (prev + 1) % filteredImages.length);
			setLoaded(false);
		}, 5000);

		return () => clearInterval(interval);
	}, [filteredImages.length]);

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
		return src.startsWith('/') ? `${API_URL}${src}` : src;
	};

	const imageSrc = currentImage ? getImageUrl(currentImage.image) : '';

	return (
		<>
			<main className="container galeria">
				<h1 >Nuestra vida en comunidad</h1>
				<p><i>Conoce las actividades de cada ministerio a través de nuestras fotografías.</i></p>
				<div className="contenedor-galeria ">
					<div className="gallery-display">
						<div className="image-frame">
							{filteredImages.length === 0 ? (
								<div className="empty-slide">
									<p>No hay imágenes disponibles en este ministerio.</p>
								</div>
							) : (
								<div className='cont container d-flex justify-content-around gap-5'>
								<button className='nav-button' onClick={() => previousImage()}>◀</button>
								<img
									className="galeria-imagen"
									src={imageSrc}
									alt={currentImage?.info || 'Imagen de galería'}
									onLoad={() => setLoaded(true)}
									style={{ opacity: loaded ? 1 : 0.4 }}
								/>
								<button className='nav-button' onClick={() => nextImage()}>▶</button>
								{currentImage?.info && (
									<div className="gallery-info">
										
										<p>{currentImage.info}</p>
										
									</div>
								)}
								</div>
							)}
						</div>
						
					</div>
			</div>
		</main>
		</>
	);
};

export default Galeria;
