import { DataTypes } from 'sequelize';
import db from '../db/conect.js';

export const Lideres = db.define('lideres', {
    id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	cargo: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	info: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
    image: {
		type: DataTypes.TEXT,
		allowNull: true,
	}
}) 