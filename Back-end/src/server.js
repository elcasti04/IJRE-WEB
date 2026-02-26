import 'dotenv/config';
import app from './app.js'
import sequelize from '../db/conect.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
	try {
		if (process.env.DATABASE_URL) {
			console.log('conectando a la base de datos....');
			await sequelize.authenticate();
			await sequelize.sync({ force: false });
			await sequelize.sync({ alter: true });

			console.log('base de datos conectada');
		} else {
			console.warn(
				'No se detectó DATABASE_URL. Se omitirá la conexión a la base de datos en este entorno de desarrollo.',
			);
		}
		app.listen(PORT, () => {
			console.log(
				`servidor corriendo en el puerto http://localhost:${PORT}`,
			);
		});
	} catch (error) {
		console.log(`algo salio mal: ${error}`);
		process.exit(1);
	}
};
startServer();
