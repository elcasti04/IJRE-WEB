import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres',
	logging: false, // Desactiva los logs de Sequelize
});

export default sequelize;
