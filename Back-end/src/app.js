import express from 'express';
import session from 'express-session';
import routes from '../routes/index.routes.js';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import errorHandler from '../middlewares/errorHandler.js';
import dotenv from 'dotenv';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	}),
);


app.use(
	cors({
		origin: 'https://ijre-kjl3djlhw-andres-arturos-projects.vercel.app', 
		credentials: true,
	}),
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  '/uploads',
  express.static(path.join(process.cwd(), 'uploads'))
);
app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/', routes);

app.use(errorHandler)


export default app;
