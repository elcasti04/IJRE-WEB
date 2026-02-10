import { Router } from 'express';

const router = Router();

// Middleware para verificar si está registrado
const requireAuth = (req, res, next) => {
	if (req.session && req.session.user) {
		return next();
	} else {
		return res.status(401).json({ message: 'No autorizado' });
	}
};


router.post('/login', (req, res) => {
	try {
		const { nombre, contraseña } = req.body;
		const usuariosPermitidos = process.env.USERS;
		const contraseñaCorrecta = process.env.CONTRASEÑA;

		// Validar usuario y contraseña
		if (
			usuariosPermitidos.includes(nombre?.toLowerCase()) &&
			contraseña === contraseñaCorrecta
		) {
			req.session.user = nombre;
			res.json({ message: 'Login exitoso', user: req.session.user });
		} else {
			res.status(401).json({ message: 'Usuario o contraseña incorrecto' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error interno del servidor' });
		console.log(error);
	}
});


router.post('/logout', (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			return res.status(500).json({ message: 'Error al cerrar sesión' });
		}
		res.json({ message: 'Sesión cerrada' });
	});
});

// Ruta protegida para admin
router.get('/admin', requireAuth, (req, res) => {
	res.json({ message: 'Bienvenido al panel de admin', user: req.session.user });
});

export default router;
