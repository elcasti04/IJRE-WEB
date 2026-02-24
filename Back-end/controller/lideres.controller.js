import catchError from '../middlewares/catchError.js';
import { Lideres } from '../models/lideres.model.js';

export const getLideres = catchError(async (req, res) => {
	try {
		const liders = await Lideres.findAll({
			attributes: ['id', 'nombre', 'cargo', 'image'],
		});
		res.json({ liders });
	} catch (error) {
		res.status(500).json({ message: 'Error al obtener líderes' });
	}
});

export const getOneLider = catchError(async (req, res) => {
	try {
		const { id } = req.params;
		const lider = await Lideres.findByPk(id);
		if (!lider) {
			return res.status(404).json({ message: 'Líder no encontrado' });
		}
		res.json(lider);
	} catch (error) {
		res.status(500).json({ message: 'Error al buscar líder' });
	}
});

export const createLider = catchError(async (req, res) => {
	try {
		const { nombre, cargo, info } = req.body;
		
		const image = req.file
			? `/uploads/lideres/${req.file.filename}`
			: req.body.image || null;
		const newLider = await Lideres.create({ nombre, cargo, info, image });
		res.status(201).json(newLider);
	} catch (error) {
		res.status(500).json({ message: 'Error al crear líder' });
	}
});

export const updateLider = catchError(async (req, res) => {
	try {
		const { id } = req.params;
		const { nombre, cargo, info } = req.body;
		
		const image = req.file
			? `/uploads/lideres/${req.file.filename}`
			: req.body.image;

		const updated = await Lideres.update(
			{ nombre, cargo, info, image },
			{ where: { id } },
		);

		if (!updated[0]) {
			return res.status(404).json({ message: 'Líder no encontrado' });
		}

		res.json({ message: 'Líder actualizado' });
	} catch (error) {
		res.status(500).json({ message: 'Error al actualizar líder' });
	}
});

export const deleteLider = catchError(async (req, res) => {
	try {
		const { id } = req.params;

		const deleted = await Lideres.destroy({
			where: { id },
		});

		if (!deleted) {
			return res.status(404).json({ message: 'Líder no encontrado' });
		}

		res.json({ message: 'Líder eliminado correctamente' });
	} catch (error) {
		res.status(500).json({ message: 'Error al eliminar líder' });
	}
});
