/*
  Inicio.jsx
  - Página principal (home) de la web.
  - Realiza una petición GET al backend para obtener texto o datos de bienvenida.
  - Usa `useEffect` para cargar datos al montar el componente.
  - Contiene botones que redirigen a secciones internas de la SPA.
*/

import axios from 'axios';
import { useEffect, useState } from 'react';

const Inicio = () => {
	// Estado local para contenido dinámico traído desde el backend
	const [data, setData] = useState('');

	useEffect(() => {
		// Petición simple al endpoint raíz del backend.
		// Si el backend responde con texto o un objeto, se muestra en el título.
		axios
			.get('http://localhost:3000/')
			.then((response) => setData(response.data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="fade-in" style={{ padding: '2rem', textAlign: 'center' }}>
			{/* Si el backend no da datos, se muestra un título por defecto */}
			<h1>{data || 'Bienvenido a Jesucristo Rey Eterno'}</h1>

			{/* Contenido estático con llamados a acción */}
			<div style={{ maxWidth: '800px', margin: '0 auto', marginTop: '2rem' }}>
				<p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
					En esta iglesia, encontramos paz, amor y esperanza en Cristo. Únete a
					nuestra comunidad espiritual donde la fe se fortalece y el amor de
					Dios nos guía cada día.
				</p>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '1rem',
						marginTop: '2rem',
					}}
				>
					{/* Redirecciones simples cambiando location (podría usarse useNavigate) */}
					<button onClick={() => (window.location.href = '/nosotros')}>
						Conócenos
					</button>
					<button onClick={() => (window.location.href = '/contacto')}>
						Contáctanos
					</button>
				</div>
			</div>

			{/* Cita bíblica destacada */}
			<div
				style={{
					marginTop: '3rem',
					padding: '2rem',
					background:
						'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(232,244,253,0.8) 100%)',
					borderRadius: 'var(--border-radius)',
					boxShadow: '0 8px 25px var(--shadow)',
				}}
			>
				<h2>
					"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo
					unigénito..." - Juan 3:16
				</h2>
			</div>
		</div>
	);
};

export default Inicio;
