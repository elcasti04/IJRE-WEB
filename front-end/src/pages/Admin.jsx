/*
  Admin.jsx
  - Panel de administración accesible solo si el backend devuelve sesión válida.
  - Funcionalidades principales:
    * Listar y crear/eliminar `info` (textos informativos).
    * Listar, crear (con imagen) y eliminar `lideres`.
    * Soporta subida de imagenes vía `FormData`.
    * Usa `api` (axios) con token JWT para autenticación.
*/

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const api = axios.create({
	baseURL: 'http://localhost:3000',
});


api.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

const Admin = () => {
	const [infos, setInfos] = useState([]);
	const [lideres, setLideres] = useState([]);
	const [newInfo, setNewInfo] = useState({ title: '', info: '' });

	const [newLider, setNewLider] = useState({
		nombre: '',
		cargo: '',
		info: '',
		image: null,
	});

	const navigate = useNavigate();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const infoRes = await api.get('/admin/info');
			setInfos(infoRes.data);

			const liderRes = await api.get('/admin/lideres');
			setLideres(liderRes.data.liders || []);
		} catch (error) {
			console.error(error);
			if (error.response?.status === 401) {
				navigate('/login');
			}
		}
	};

	// ================= INFO =================
	const handleAddInfo = async () => {
		try {
			await api.post('/admin/info', newInfo);
			setNewInfo({ title: '', info: '' });
			fetchData();
		} catch (error) {
			console.error(error);
		}
	};

	const handleDeleteInfo = async (id) => {
		try {
			await api.delete(`/admin/info/${id}`);
			fetchData();
		} catch (error) {
			console.error(error);
		}
	};

	// ================= LÍDERES =================
	const handleAddLider = async () => {
		try {
			const formData = new FormData();
			formData.append('nombre', newLider.nombre);
			formData.append('cargo', newLider.cargo);
			formData.append('info', newLider.info);
			formData.append('image', newLider.image);

			await api.post('/admin/lideres', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			setNewLider({
				nombre: '',
				cargo: '',
				info: '',
				image: null,
			});

			fetchData();
		} catch (error) {
			console.error(error);
		}
	};

	const handleDeleteLider = async (id) => {
		try {
			await api.delete(`/admin/lideres/${id}`);
			fetchData();
		} catch (error) {
			console.error(error);
		}
	};

	// ================= LOGOUT =================
	const handleLogout = () => {
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<div style={{ padding: '2rem' }}>
			<h1>Panel de Administración</h1>

			{/* ===== INFO ===== */}
			<h2>Información</h2>
			<ul>
				{infos.map((info) => (
					<li key={info.id}>
						<strong>{info.title}</strong> - {info.info}
						<button onClick={() => handleDeleteInfo(info.id)}>Eliminar</button>
					</li>
				))}
			</ul>

			<input
				placeholder="Título"
				value={newInfo.title}
				onChange={(e) => setNewInfo({ ...newInfo, title: e.target.value })}
			/>
			<textarea
				placeholder="Info"
				value={newInfo.info}
				onChange={(e) => setNewInfo({ ...newInfo, info: e.target.value })}
			/>
			<button onClick={handleAddInfo}>Agregar Info</button>

			<hr />

			{/* ===== LÍDERES ===== */}
			<h2>Líderes</h2>
			<ul>
				{lideres.map((lider) => (
					<li key={lider.id}>
						<strong>{lider.nombre}</strong> - {lider.cargo}
						<br />
						{lider.image && (
							<img
								src={`http://localhost:3000${lider.image}`}
								alt={lider.nombre}
								width="100"
							/>
						)}
						<br />
						<button onClick={() => handleDeleteLider(lider.id)}>
							Eliminar
						</button>
					</li>
				))}
			</ul>

			<input
				placeholder="Nombre"
				value={newLider.nombre}
				onChange={(e) => setNewLider({ ...newLider, nombre: e.target.value })}
			/>
			<input
				placeholder="Cargo"
				value={newLider.cargo}
				onChange={(e) => setNewLider({ ...newLider, cargo: e.target.value })}
			/>
			<textarea
				placeholder="Información del líder"
				value={newLider.info}
				onChange={(e) => setNewLider({ ...newLider, info: e.target.value })}
			/>

			<input
				type="file"
				accept="image/*"
				onChange={(e) => setNewLider({ ...newLider, image: e.target.files[0] })}
			/>

			<button onClick={handleAddLider}>Agregar Líder</button>

			<hr />

			<button onClick={handleLogout}>Cerrar sesión</button>
		</div>
	);
};

export default Admin;
