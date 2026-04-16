
import catchError from "../middlewares/catchError.js";

const inicio = catchError((req, res) => {
	res.json(`Bienvenidos IGLESIA EVANGELICA JESUCRISTO REY ETERNO IJRE-IREP`);
});
export default inicio;
