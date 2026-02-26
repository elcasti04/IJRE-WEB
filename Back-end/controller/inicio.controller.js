
import catchError from "../middlewares/catchError.js";

const inicio = catchError((req, res) => {
	res.json(`<p>Bienvenidos</p>
			<h1> IGLESIA EVANGELICA JESUCRISTO REY ETERNO</h1>
			<h4>IJRE-IREP</h4>`);
});
export default inicio;
