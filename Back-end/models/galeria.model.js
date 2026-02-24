import db from '../db/conect.js'
import { DataTypes } from 'sequelize'

export const Galeria = db.define('galeria',{
    ministerio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    info: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})