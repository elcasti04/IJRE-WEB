import catchError from '../middlewares/catchError.js';
import { Info } from '../models/info.model.js';

export const getInfo = catchError(async (req, res) => {
	try {
		const infos = await Info.findAll();
		res.json(infos);
	} catch (error) {
		console.log(error);
	}
});
export const createInfo = catchError(async (req, res) => {
	const { title, info } = req.body;
	const newInfo = await Info.create({ title, info });
	res.json({ message: 'info guardada', newInfo });
});

export const updateInfo = catchError(async (req, res) => {
	const { id } = req.params;
	const { title, info } = req.body;
	await Info.update({ title, info }, { where: { id } });
	res.json({ message: 'info actualizada', title, info });
});

export const deleteInfo = catchError(async (req, res) => {
	const { id } = req.params;
	await Info.destroy({ where: { id } });
	res.json({ message: 'info eliminada' });
});
