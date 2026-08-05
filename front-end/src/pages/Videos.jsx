import './style/videos.css';

const Videos = () => {

	const videos = [
		{
			id: 1,
			titulo: 'Liturgia Cristiana #1 | ¿Qué es y por qué el orden del culto es importante?',
			autor: 'Pastor Marco Orozco',
			codigo: 'https://youtu.be/eKWy63p_ceU'
		},
		{
			id: 2,
			titulo: '¿Cómo afrontar el sufrimiento? | Rut 1:20-21',
			autor: 'Misionero Marlon Paez',
			codigo: 'https://youtu.be/PM7PhgzT6TA'
		},
		{
			id: 3,
			titulo: 'Liturgia Cristiana #7 | ¿Por qué Diezmamos y Ofrendamos?',
			autor: 'Pastor Marco Orozco',
			codigo: 'https://youtu.be/UK0spUocXys'
		},
	];

	return (
		<>
			<main className="predicas container text-black">
				<i>Predicaciones</i>
				<div>
					<h1>La Palabra que transforma</h1>

					<p>
						
							Escucha nuestros mensajes y crece en el conocimiento de Cristo.
							<br />
							Nuevas predicaciones cada semana en nuestro canal de{" "}
							<a
								href="https://www.youtube.com/@JesucristoReyEternooficial"
								target="_blank"
								rel="noopener noreferrer"
							>
								YouTube
							</a>.
						
					</p>

					{videos.map((video, index) => (
						<div className='contenedor-predicas'>
							<ul 
							className='predicaciones '
							key={index}>
								<li className=''>
									<h3>{video.titulo}</h3>
									<p>{video.autor}</p>
									<button onClick={() => window.open(video.codigo)}>
										Ver ahora
									</button>
								</li>
							</ul>
						</div>
					))}
				</div>
				<p className='youtube'
				onClick={() => window.open('https://www.youtube.com/@JesucristoReyEternooficial')}>
					Ver mas en <span>▶</span> YouTube
				</p>
			</main>
		</>
	);
};

export default Videos;