import express from 'express';
import session from 'express-session';
import routes from '../routes/index.routes.js';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
	session({
		secret: '1234',
		resave: false,
		saveUninitialized: false,
	}),
);


app.use(
	cors({
		origin: 'http://localhost:5173', 
		credentials: true,
	}),
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/', routes);


export default app;
