
import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Info from './pages/Info';
import Videos from './pages/Videos';
import Nosotros from './pages/Nosotros';
import Lideres from './pages/Lideres';
import Contacto from './pages/Contacto';
import Donaciones from './pages/Donaciones';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Creemos from './pages/cremos';
import Header from './components/header';
import Iglesias from './pages/Iglesias';
import Galeria from './pages/Galeria';
import Ministerios from './pages/ministerios';
import Academia from './pages/Academia';
import Footer from './pages/footer';

function Home() {
	return (
		<>
		<Header />
		<section id='Inicio'>
			<Inicio />
		</section>
		<section id='Nosotros'>
			<Nosotros />
		</section>
		<section id='Creemos'>
			<Creemos />
		</section>
		<section id='Galeria'>
			<Galeria />
		</section>
		<section id='Videos'>
			<Videos />
		</section>
		<section id='Lideres'>
			<Lideres />
		</section>
		<section id='Ministerios'>
			<Ministerios />
		</section>
		<section id='Academia'>
			<Academia />
		</section>
		<section id='Iglesias'>
			<Iglesias />
		</section>
		<section id='Contacto'>
			<Contacto />
		</section>
		<section id='Footer'>
			<Footer />
		</section>
		</>
	);
}

function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/*" element={<Home />} />
			<Route path="/Nosotros" element={<Nosotros />} />
			<Route path="/Creemos" element={<Creemos />} />
			<Route path="/Galeria" element={<Galeria />} />
			<Route path="/Videos" element={<Videos />} />
			<Route path="/Lideres" element={<Lideres />} />
			<Route path="/Ministerios" element={<Ministerios />} />
			<Route path="/Academia" element={<Academia />} />
			<Route path="/Iglesias" element={<Iglesias />} />
			<Route path="/Contacto" element={<Contacto />} />
			<Route path="/Admin" element={<Admin />} />
			
			
		</Routes>
	);
}

export default App;
