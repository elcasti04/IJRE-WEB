import './style/admin.css'
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
	const [galeria, setGaleria] = useState([])
	const [imagen, setImagen] = useState({ ministerio: '', info: '', image: '' })
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

			const galeryRes = await api.get('/admin/galeria');
			setGaleria(galeryRes.data)
		} catch (error) {
			console.error(error);
			if (error.response?.status === 401) {
				navigate('/login');
			}
		}
	};


	// ================== GALERIA ==================

	const handleAddFoto = async () => {
		try {
			const formData = new FormData();
			formData.append('ministerio', imagen.ministerio);
			formData.append('info', imagen.info);
			formData.append('image', imagen.image);

			await api.post('/admin/galeria', formData);
			setImagen({ ministerio: '', info: '', image: '' });
			fetchData();
		} catch (error) {
			console.error(error);
		}
	}

	const handleDeleteFoto = async (id) => {
		try {
				await api.delete(`/admin/galeria/${id}`)
			fetchData()
		} catch (error) {
			console.error(error)
		}
	}

	// ================= INFO =================
	const handleAddInfo = async () => {
		try {
			await api.post('admin/info', newInfo);
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
		<div className='admin'>
			

			<div className='heade d-flex justify-content-around'>
				<h1>Panel de Administración</h1>
				<button onClick={handleLogout}>Cerrar sesión</button>
			</div>

			<div className='INFORMACION'>
							
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
			</div>

			<hr />


			<div className='LIDERES col d-flex'>
				{/* Lider */}

			<div className='Añadir-Lider col-5'>
					<h2>Añadir Lider</h2>

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
			</div>

			

			<div className='ver-lideres col-5'>
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
			</div>

			<hr />

			
			</div>


			<hr />

			
			<div className='GALERIA'>
				<h2>Añadir foto a Galeria</h2>
				<select name="minis" id="minis"
					value={imagen.ministerio}
					onChange={(e) => setImagen({ ...imagen, ministerio: e.target.value})}>
					<option value={null}>Seleccione un ministerio</option>
					<option value="Damas">Damas</option>
					<option value="Caballeros">Caballeros</option>
					<option value="Jovenes">Jovenes</option>
					<option value="Niños">Niños</option>
					
				</select>	

				<input type="text" 
					placeholder='informacion relevante'
					value={imagen.info}
					onChange={(e) => setImagen({ ...imagen, info: e.target.value})}/>

				<input
				type="file"
				accept="image/*"
				onChange={(e) => setImagen({ ...imagen, image: e.target.files[0] })}
			/>


				<button onClick={handleAddFoto}>Agregar Imagen</button>

			<h2>Fotos</h2>
			{galeria.map((fotos) => (
				<ul key={fotos.id}>
					<li>
						<h5>{fotos.ministerio}</h5>
						<img src={fotos.image} alt="" />
						<p>{fotos.info}</p>
						<button onClick={() => handleDeleteFoto(fotos.id)}>Eliminar</button>
					</li>
				</ul>
			))}
			</div>

<br />
<hr />
<br />

			

		</div>
	);
};

export default Admin;
