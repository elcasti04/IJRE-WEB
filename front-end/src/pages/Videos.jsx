import './style/videos.css';

const Videos = () => {

	const videos = [
		{
			id: 1,
			titulo: ' Liturgia Cristiana #1',
			autor: 'Pastor Marco Orozco',
			codigo: 'eKWy63p_ceU?si'
		},
		{
			id: 2,
			titulo: ' Liturgia Cristiana #1',
			autor: 'Pastor Marco Orozco',
			codigo: 'eKWy63p_ceU?si'
		},
		{
			id: 3,
			titulo: ' Liturgia Cristiana #1',
			autor: 'Pastor Marco Orozco',
			codigo: 'eKWy63p_ceU?si'
		},
		{
			id: 4,
			titulo: ' Liturgia Cristiana #1',
			autor: 'Pastor Marco Orozco',
			codigo: 'eKWy63p_ceU?si'
		},
	];

	return (
		<>
			<main className="predicas container text-black">
				<div>
					<h1>La Palabra que transforma</h1>

					<p>
						
							Escucha nuestros mensajes y crece en el conocimiento de Cristo.
							Nuevas predicaciones cada semana en nuestro canal de{" "}
							<a
								href="https://www.youtube.com/channel/UCMkGUI4CEGK01_MNE6jl3dg"
								target="_blank"
								rel="noopener noreferrer"
							>
								YouTube
							</a>.
						
					</p>

					<div className="contenedor-predicas d-flex flex-wrap justify-content-around">

						{videos.map((video) => (
							<div className="p-2" key={video.id}>
								<div>

									<iframe
										style={{ borderRadius: "12px 12px 0 0" }}
										width="250"
										height="220"
										src={`https://www.youtube.com/embed/${video.codigo}`}
										title={video.titulo}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerPolicy="strict-origin-when-cross-origin"
										allowFullScreen
									/>

									<h3 className="text-white p-2">Predica</h3>

									<div className="p-2">
										<i>{video.titulo.toUpperCase()}</i>

										<p>
											<i>
												{video.autor.charAt(0).toUpperCase() +
													video.autor.slice(1)}
											</i>
										</p>
									</div>

								</div>
							</div>
						))}

					</div>

					<br />

					<div className="ver d-flex justify-content-center rounded">
						<h2
							className="btn-ver rounded text-white text-center"
							onClick={() =>
								window.open(
									"https://www.youtube.com/channel/UCMkGUI4CEGK01_MNE6jl3dg",
									"_blank"
								)
							}
						>
							Ver más en YouTube
						</h2>
					</div>

				</div>
			</main>
		</>
	);
};

export default Videos;