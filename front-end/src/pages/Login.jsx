/*
  Login.jsx
  - Formulario de acceso administrativo.
  - Envía `nombre` al endpoint `/auth/login` del backend.
  - Si la respuesta indica éxito, redirige a `/admin`.
  - Muestra mensajes de error devueltos por el backend.
*/

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:3000/auth/login', {
				email,
				password,
			});
			setMessage(response.data.message);
			if (response.data.message === 'Login exitoso') {
				// Guardar el token en localStorage
				localStorage.setItem('token', response.data.token);
				navigate('/admin');
			}
		} catch (error) {
			setMessage(error.response?.data?.message || 'Error');
		}
	};

	return (
		<div
			className="fade-in"
			style={{
				padding: '2rem',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '60vh',
			}}
		>
			<div
				style={{
					background: 'white',
					padding: '2rem',
					borderRadius: 'var(--border-radius)',
					boxShadow: '0 8px 25px var(--shadow)',
					maxWidth: '400px',
					width: '100%',
					textAlign: 'center',
				}}
			>
				<h1 style={{ marginBottom: '1rem' }}>Acceso Administrativo</h1>
				<p style={{ marginBottom: '2rem', color: 'var(--light-text)' }}>
					Ingresa tu usuario y contraseña para acceder al panel de
					administración
				</p>
				<form onSubmit={handleSubmit}>
					<div>
						<img
							src="https://img.icons8.com/?size=100&id=98957&format=png&color=000000"
							alt="Icono de password"
							style={{ width: '24px', height: '24px', marginRight: '1rem' }}
						/>
						<input
							type="text"
							placeholder="Usuario"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							style={{ marginBottom: '1rem' }}
						/>

						<input
							type="password"
							placeholder="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							style={{ marginBottom: '1rem' }}
						/>
					</div>
					<button type="submit" style={{ width: '100%' }}>
						Acceder
					</button>
				</form>
				{message && (
					<p
						style={{
							marginTop: '1rem',
							color:
								message === 'Login exitoso' ? 'var(--secondary-color)' : 'red',
							fontWeight: 'bold',
						}}
					>
						{message}
					</p>
				)}
			</div>
		</div>
	);
};

export default Login;
