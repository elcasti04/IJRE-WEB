import catchError from "../middlewares/catchError.js";

export const sobreNosotros = catchError(async (req, res) => {
    res.send('Sobre Nosotros - Iglesia Evangelica JesuCristo Rey Eterno');
})