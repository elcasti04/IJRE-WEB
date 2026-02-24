import catchError from "../middlewares/catchError.js";

export const contacto = catchError((req, res) => {
    res.send('Contacto y Redes - Iglesia Evangelica JesuCristo Rey Eterno');
})