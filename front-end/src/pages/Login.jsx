
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Login.css'

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
				
				localStorage.setItem('token', response.data.token);
				navigate('/admin');
			}
		} catch (error) {
			setMessage(error.response?.data?.message || 'Error');
		}
	};

	return (
		<div className="login">

			<div>
				<h1>Acceso Administrativo</h1>
				<p>
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
						/>

						<input
							type="password"
							placeholder="contraseña"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button type="submit">
						Acceder
					</button>
				</form>
				{message && (
					<p>
						{message}
					</p>
				)}
			</div>
		</div>
	);
};

export default Login;
