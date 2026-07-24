import './style/admin.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL



const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
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
	// const handleAddInfo = async () => {
	// 	try {
	// 		await api.post('admin/info', newInfo);
	// 		setNewInfo({ title: '', info: '' });
	// 		fetchData();
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	// const handleDeleteInfo = async (id) => {
	// 	try {
	// 		await api.delete(`/admin/info/${id}`);
	// 		fetchData();
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };




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
    <div className="admin">

        <header className="admin-header">

            <div>
                <h1>Panel de Administración</h1>
                <p>Gestiona los líderes y la galería de la iglesia.</p>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
                Cerrar sesión
            </button>

        </header>


        {/* ================= LIDERES ================= */}

        <section className="admin-grid">

            {/* Agregar líder */}

            <div className="card-admin">

                <h2>Añadir Líder</h2>

                <div className="form-admin">

                    <input
                        placeholder="Nombre"
                        value={newLider.nombre}
                        onChange={(e) =>
                            setNewLider({
                                ...newLider,
                                nombre: e.target.value,
                            })
                        }
                    />

                    <input
                        placeholder="Cargo"
                        value={newLider.cargo}
                        onChange={(e) =>
                            setNewLider({
                                ...newLider,
                                cargo: e.target.value,
                            })
                        }
                    />

                    <textarea
                        placeholder="Información del líder"
                        value={newLider.info}
                        onChange={(e) =>
                            setNewLider({
                                ...newLider,
                                info: e.target.value,
                            })
                        }
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            setNewLider({
                                ...newLider,
                                image: e.target.files[0],
                            })
                        }
                    />

                    <button
                        className="btn-primary"
                        onClick={handleAddLider}
                    >
                        Agregar líder
                    </button>

                </div>

            </div>


            {/* Lista de líderes */}

            <div className="card-admin">

                <h2>Líderes registrados</h2>

                <div className="lista-lideres">

                    {lideres.map((lider) => (

                        <div
                            className="lider-item"
                            key={lider.id}
                        >

                            <img
                                src={`${API_URL}${lider.image}`}
                                alt={lider.nombre}
                            />

                            <div>

                                <h4>{lider.nombre}</h4>

                                <p>{lider.cargo}</p>

                            </div>

                            <button
                                className="btn-danger"
                                onClick={() =>
                                    handleDeleteLider(lider.id)
                                }
                            >
                                Eliminar
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>



        {/* ================= GALERIA ================= */}

        <section className="card-admin galeria-admin">

            <h2>Galería</h2>

            <div className="form-admin">

                <select
                    value={imagen.ministerio}
                    onChange={(e) =>
                        setImagen({
                            ...imagen,
                            ministerio: e.target.value,
                        })
                    }
                >
                    <option value="">
                        Seleccione un ministerio
                    </option>

                    <option value="Damas">
                        Damas
                    </option>

                    <option value="Caballeros">
                        Caballeros
                    </option>

                    <option value="Jovenes">
                        Jóvenes
                    </option>

                    <option value="Niños">
                        Niños
                    </option>

                </select>

                <input
                    type="text"
                    placeholder="Información"
                    value={imagen.info}
                    onChange={(e) =>
                        setImagen({
                            ...imagen,
                            info: e.target.value,
                        })
                    }
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                        setImagen({
                            ...imagen,
                            image: e.target.files[0],
                        })
                    }
                />

                <button
                    className="btn-primary"
                    onClick={handleAddFoto}
                >
                    Agregar imagen
                </button>

            </div>

            <div className="galeria-grid">

                {galeria.map((foto) => (

                    <div
                        className="foto-card"
                        key={foto.id}
                    >

                        <img
                            src={`${API_URL}${foto.image}`}
                            alt=""
                        />

                        <h5>
                            {foto.ministerio}
                        </h5>

                        <p>
                            {foto.info}
                        </p>

                        <button
                            className="btn-danger"
                            onClick={() =>
                                handleDeleteFoto(foto.id)
                            }
                        >
                            Eliminar
                        </button>

                    </div>

                ))}

            </div>

        </section>

    </div>
);
};

export default Admin;
