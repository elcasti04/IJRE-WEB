import { Info } from '../models/info.model.js';

export const getInfo = async (req, res) => {
	try {
		const infos = await Info.findAll();
		res.json(infos);
	} catch (error) {
		console.log(error);
	}
};
export const createInfo = async (req, res) => {
	const { title, info } = req.body;
	const newInfo = await Info.create({ title, info });
	res.json({ message: 'info guardada', newInfo });
};

export const updateInfo = async (req, res) => {
	const { id } = req.params;
	const { title, info } = req.body;
	await Info.update({ title, info }, { where: { id } });
	res.json({ message: 'info actualizada', title, info });
};

export const deleteInfo = async (req, res) => {
	const { id } = req.params;
	await Info.destroy({ where: { id } });
	res.json({ message: 'info eliminada' });
};
