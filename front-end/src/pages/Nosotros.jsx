import './style/nosotros.css'
import { useNavigate } from 'react-router-dom'

const Nosotros = () => {

	const navigate = useNavigate()

	return (
		<>
			<main 
			className="nosotros container col">
				<i>Quienes Somos</i>
					<h1 >Somos una familia que ama la 
						<br />
						Palabra de Dios
					</h1>
				<div className='col d-flex justify-content-between align-items-center gap-5 flex-wrap'>
					<div className='col-12 col-lg-6'>
						<p>	
						Somos una congregación presbiteriana reformada ubicada en San Pedro, 
						Sucre, comprometida con la proclamación fiel del evangelio de Jesucristo. 
						Creemos que las Sagradas Escrituras son la Palabra inspirada, infalible e 
						inerrante de Dios, y la única autoridad suprema para la fe y la vida. Nuestra 
						misión es glorificar a Dios mediante la adoración, la predicación expositiva 
						de la Biblia, el discipulado, la comunión de los creyentes y el servicio a 
						nuestra comunidad. Deseamos que toda persona que nos visite encuentre un hogar 
						espiritual donde pueda conocer a Cristo, crecer en la sana doctrina, vivir en 
						comunidad y servir al Señor para la gloria de Dios.

						</p>
					</div>
				<img className='col-12 col-lg-5 border rounded p-3' 
				height={'300px'}
				src="/img/fotoIglesia.jpg" alt="" />
				</div>
				<br />
				<i>Nuestra Historia</i>
				<hr />
				<div 
				className='d-flex align-items-center gap-5'>
					<img 
					className='border rounded' 
					width={'400px'} 
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYzNlUxAoLM1QBnqfFcq6mesDDy0D56qoKnahP1XdoA&s=10" 
					alt="Iglesia en sus inicios" />
					<p 
					className='mision'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugiat optio incidunt quas saepe autem alias deserunt. Sed deserunt necessitatibus temporibus, similique nemo voluptatem repellendus esse molestiae voluptate. Non, eum?
						<br />
						<strong 
						onClick={() => navigate('/Historia')}
						className='ver-h'>
							Ver Historia ➡
						</strong>
					</p>
				</div>
				<br />
			<div className="mision-vision col d-flex gap-5 ">
				<div className="mision col-12 col-lg-6  p-2" >
					<i>Nuestra Mision</i>
					<hr />
					
					<p>Predicar el evangelio con fidelidad
						<br />
						Glorificar a Dios proclamando fielmente el evangelio de nuestro Señor Jesucristo 
						conforme a las Sagradas Escrituras, reconociendo su autoridad suprema y la 
						soberanía de Dios sobre todas las cosas. Nuestra misión es anunciar las buenas 
						nuevas de salvación por gracia mediante la fe en Cristo, hacer discípulos, 
						edificar a los creyentes en la sana doctrina reformada, promover una vida de santidad 
						y adoración centrada en Dios, y servir con amor, misericordia y verdad a nuestra 
						comunidad, para que el nombre del Señor sea conocido y glorificado en todas las naciones.
					</p>
				</div>
				<div className="vision col-12 col-lg-6  p-2" >
					<i>Nuestra Vision</i>
					<hr />
					<p>Multiplicar iglesias fieles en la Costa
						<br />
						Anhelamos, por la gracia y el poder de Dios, ser una iglesia saludable 
						y bíblicamente sólida que sirva como instrumento para la plantación y  
						fortalecimiento de nuevas congregaciones reformadas en toda la Costa 
						Caribe colombiana. Nos comprometemos a formar discípulos, capacitar 
						líderes y pastores fieles a las Sagradas Escrituras, promover la sana 
						doctrina conforme a la fe reformada y establecer iglesias que 
						glorifiquen a Dios mediante la predicación expositiva de su Palabra, 
						la correcta administración de los sacramentos, el ejercicio de la 
						disciplina bíblica y el servicio amoroso a sus comunidades, para la 
						expansión del Reino de Cristo.
					</p>
				</div>
			</div>
			</main>
		</>
	);
};

export default Nosotros;
