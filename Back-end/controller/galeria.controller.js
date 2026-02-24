import catchError from "../middlewares/catchError.js";
import { Galeria } from "../models/galeria.model.js";

export const getAllImages = catchError(async (req, res) => {
    const images = await Galeria.findAll()
    res.send(images)
})

export const getImageMinisterio = catchError(async (req, res) => {
    try {
        const { ministerio } = req.params;
        const images = await Galeria.findAll({ 
            where: { ministerio } 
        });
        
        if (images.length === 0) {
            return res.status(404).send({ message: "No se encontraron imágenes para este ministerio" });
        }

        res.send(images);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al obtener las imágenes" });
    }
})

export const createImage = catchError(async (req, res) => {
    const { ministerio, info, image } = req.body
    const imagen = await Galeria.create({ ministerio, info, image })
    res.send(imagen)
})

export const deleteImage = catchError(async (req, res) => {
    const { id } = req.params
    await Galeria.destroy({ where: { id } })
    res.send('imagen eliminada')
})