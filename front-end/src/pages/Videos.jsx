import { useState } from 'react';
import './style/videos.css'

const Videos = () => {
	const [videoActivo, setVideoActivo] = useState(null);
	const videos = [
		{
			id:1,
			titulo: 'doma',
			autor: 'josean log',
			codigo: <iframe style={{borderRadius:'12px'}} width="300" height="220" src="https://www.youtube.com/embed/pCPYb7KPoUc?list=RDpCPYb7KPoUc" title="Jósean Log - Doma (Lyric Video)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
		},
		{

			id:2,
			titulo: 'luciernagas',
			autor: 'milo j',
			codigo: <iframe style={{borderRadius:'12px'}} width="300" height="220" src="https://www.youtube.com/embed/vSrQVMKcGyY?list=RDpCPYb7KPoUc" title="Milo J, Silvio Rodríguez - Luciérnagas (Letra)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
		},
		{

			id:3,
			titulo: 'Lo que hay X aqui',
			autor: 'rels B',
			codigo: <iframe style={{borderRadius:'12px'}} width="300" height="220" src="https://www.youtube.com/embed/pCPYb7KPoUc?list=RDpCPYb7KPoUc" title="Jósean Log - Doma (Lyric Video)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
		},
		{

			id:4,
			titulo: 'Lo que hay X aqui',
			autor: 'rels B',
			codigo: <iframe style={{borderRadius:'12px'}} width="300" height="220" src="https://www.youtube.com/embed/pCPYb7KPoUc?list=RDpCPYb7KPoUc" title="Jósean Log - Doma (Lyric Video)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
		}
	]
	return (
		<>
		<main className='predicas container-fluid text-black '>
		<div>
			<h1 className=''>La Palabra que transforma</h1>
				<p>
					<i>
						Escucha nuestros mensajes y crece en el conocimiento de Cristo. Nuevas predicaciones cada semana 
					en nuestro canal de <a href="https://www.youtube.com/channel/UCMkGUI4CEGK01_MNE6jl3dg" 
					target='_blank'>Youtube</a>.
					</i>
				</p>

			<div className='contenedor-predicas text-start d-flex flex-wrap justify-content-around'>
				{videos.map((video, index) => (
					<div key={index}>
					<div className='d-flex flex-around p-2'>
							<div style={{ borderBottom:'5px solid black', width:'300px', padding:'2px', borderRadius:'12px'}}>
								<div className='w-10' style={{ borderRadius:'12px 12px 0px 0px'}}>
									{video.codigo}
									
								</div>
								<h3 className='text-white'>Canción</h3>
									<div className='p-2'>
										<i>{video.titulo.toUpperCase( )}</i>
										<p><i>{video.autor.charAt(0).toUpperCase() + video.autor.slice(1)}</i></p>
											

									</div>
						</div>
						
					</div>
					</div>
				))}
				
				
				
			</div>
			<br />
			
		</div>
		<div className='ver d-flex justify-content-center rounded'>
			<h2 onClick={() => 
				window.open('https://www.youtube.com/channel/UCMkGUI4CEGK01_MNE6jl3dg')}
				className='btn-ver rounded text-white text-center'>Ver mas en Youtube</h2>
		</div>
		</main>
		</>
	);
};

export default Videos;
