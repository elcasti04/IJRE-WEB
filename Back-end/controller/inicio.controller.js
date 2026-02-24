import catchError from "../middlewares/catchError.js";

const inicio = catchError((req, res) => {
	res.send('Iglesia Evangelica JesuCristo Rey Eterno');
});
export default inicio;
