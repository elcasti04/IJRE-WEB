/*
  Nosotros.jsx
  - Página estática con información sobre la comunidad.
  - Contenido simple: misión y visión. Mantener IDs únicos si se planea enlazar desde navegación interna.
*/

const Nosotros = () => {
	return (
		<div>
			<h1>Nosotros</h1>
			<p>Información sobre nosotros.</p>

			<div id="mision">
				<h3>mision</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos est
					voluptate odit blanditiis expedita, dolore autem non nulla veritatis
					ab voluptas accusantium, laborum amet quia! Eos quisquam minus quidem?
				</p>
			</div>
			<div id="mision">
				<h3>vision</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, repellat
					id nemo aut nesciunt veniam reiciendis dolores suscipit nostrum soluta
					iure fugit, libero numquam, sed quisquam qui accusamus provident
					laboriosam?
				</p>
			</div>
		</div>
	);
};

export default Nosotros;
