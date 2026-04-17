const Inicio = () => {
	return (
		<>
			<div
				className="fade-in"
				style={{
					padding: '2rem',
					textAlign: 'center',
					background:
						'linear-gradient(135deg, rgba(245,248,252,0.94) 0%, rgba(229,239,250,0.94) 100%)',
				}}
			>
				{/* Si el backend no da datos, se muestra un título por defecto */}
				<h1>Bienvenidos</h1>
				<h1 className="inicio-titulo" style={{fontSize:'40px'}}>
					Iglesia Evangelica Jesucristo Rey Eterno
				</h1>
				<h3>IEJRE - IREP</h3>

				{/* cita Biblica */}
				<div style={{ width: '100%', marginTop: '1.5rem' }}>
					<h2>Romanos 11:36</h2>
					<p style={{ fontSize: '1rem', lineHeight: '1' }}>
						<i>
							Porque de él, y por él, y para él, son todas las cosas. A él sea
							la gloria por los siglos. Amén.
						</i>
					</p>
					<h3>Soli Deo Gloria</h3>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							gap: '1rem',
							marginTop: '1rem',
						}}
					>
						{/* Redirecciones simples cambiando location (podría usarse useNavigate) */}
						<button onClick={() => (window.location.href = '/info')}>
							Información
						</button>
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
							'linear-gradient(135deg, rgba(245,248,252,0.95) 0%, rgba(217,235,245,0.95) 100%)',
						borderRadius: 'var(--border-radius)',
						boxShadow: '0 8px 25px var(--shadow)',
					}}
				>
					<h2>Reformados Por La Palabra de Dios</h2>
				</div>
			</div>
		</>
	);
};

export default Inicio;
