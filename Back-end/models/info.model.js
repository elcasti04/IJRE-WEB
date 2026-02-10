import { DataTypes } from 'sequelize';
import db from '../db/conect.js';

export const Info = db.define('informacion', {
    id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	info: {
		type: DataTypes.TEXT,
		allowNull: true,
	}
}) 
