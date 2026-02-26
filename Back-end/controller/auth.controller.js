import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import catchError from '../middlewares/catchError.js';

export const register = catchError(async (req, res) => {
	const { username, email, password } = req.body;
	if (!username || !email || !password) {
		return res.status(400).json({ message: 'Faltan datos' });
	}
	const existingUser = await User.findOne({ where: { email } });
	if (existingUser) {
		return res.status(409).json({ message: 'El usuario ya existe' });
	}
	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await User.create({
		username,
		email,
		password: hashedPassword,
	});
	res.status(201).json({
		message: 'Usuario registrado correctamente',
		user: {
			id: user.id,
			username: user.username,
			email: user.email,
		},
	});
});

export const login = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ message: 'Email y contraseña requeridos' });
	}
	const user = await User.findOne({ where: { email } });
	if (!user) {
		return res.status(404).json({ message: 'Usuario no encontrado' });
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		return res.status(401).json({ message: 'Contraseña incorrecta' });
	}

	const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
		expiresIn: '24h',
	});

	res.json({
		message: 'Login exitoso',
		token,
		user: {
			id: user.id,
			username: user.username,
			email: user.email,
		},
	});
};
