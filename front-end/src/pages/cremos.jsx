import { useState } from 'react';
import './style/creemos.css';

const Creemos = () => {
	const doctrina = [
		{
			credo: '5 Solas de la Reforma',
			texto:
				'Son los principios fundamentales de la Reforma Protestante que resumen las verdades esenciales del Evangelio.',
			solas: [
				{
					sola: 'Sola Scriptura',
					texto: 'La Biblia es la única autoridad suprema para el creyente.',
				},
				{
					sola: 'Sola Fide',
					texto: 'La salvación se recibe solo por la fe, sin obras.',
				},
				{
					sola: 'Sola Gratia',
					texto: 'La salvación es un regalo gratuito y no merecido de Dios.',
				},
				{
					sola: 'Solus Christus',
					texto: 'Jesucristo es el único mediador entre Dios y los hombres.',
				},
				{
					sola: 'Soli Deo Gloria',
					texto: 'Toda la gloria pertenece únicamente a Dios.',
				},
			],
		},
		{
			credo: 'Credo Niceno',
			texto:
				'Confesamos la fe apostólica expresada en el Credo Niceno, fundamento común de la ortodoxia cristiana universal a través de los siglos.',
			url: '/credo/credo_niceno.pdf',
		},
		{
			credo: 'Estándares de Westminster',
			texto:
				'Nuestra doctrina se basa en las grandes confesiones de la Reforma y en la enseñanza bíblica a través de los siglos.',
			textos: [
				{
					nombre: 'Catecismo Mayor de Westminster',
					url: '/credo/CatecismoMayordeWestminster.pdf',
				},
				{
					nombre: 'Catecismo Menor de Westminster',
					url: '/credo/CatecismoMenordeWestminster.pdf',
				},
				{
					nombre: 'Confesión de Fe de Westminster',
					url: '/credo/confesion_de_fe_de_westminster.pdf',
				},
			],
		},
	];

	const [seleccionado, setSeleccionado] = useState(doctrina[0]);

	return (
		<main className="creemos container py-5">
			<i>Que Creemos</i>
			<h1>Estamos anclados en la fe histórica</h1>

			<p>
				Nuestra doctrina se basa en las grandes confesiones de la Reforma y en la
				enseñanza bíblica a través de los siglos.
			</p>

			<div className="contenedor-creemos">

				{/* IZQUIERDA */}

				<div className="menu-creemos">
					{doctrina.map((item) => (
						<div
							key={item.credo}
							className={`menu-item ${
								seleccionado.credo === item.credo ? 'activo' : ''
							}`}
							onClick={() => setSeleccionado(item)}
						>
							{item.credo}
						</div>
					))}
				</div>

				{/* DERECHA */}

				<div className="contenido-creemos">

					<p>{seleccionado.texto}</p>

					{/* 5 Solas */}

					{seleccionado.solas && (
						<div className="lista-solas">
							{seleccionado.solas.map((sola) => (
								<div key={sola.sola} className="sola">
									<h5>{sola.sola}</h5>
									<p>{sola.texto}</p>
								</div>
							))}
						</div>
					)}
					{/* Credo Niceno */}

					{seleccionado.url && (
						<div className="documentos">
							<a
								href={seleccionado.url}
								target="_blank"
								rel="noreferrer"
							>
								📄Credo Niceno
							</a>
						</div>
					)}

					{/* Westminster */}

					{seleccionado.textos && (
						<div className="documentos">
							{seleccionado.textos.map((doc) => (
								<a
									key={doc.nombre}
									href={doc.url}
									target="_blank"
									rel="noreferrer"
								>
									📄 {doc.nombre}
								</a>
							))}
						</div>
					)}
				</div>

			</div>
		</main>
	);
};

export default Creemos;