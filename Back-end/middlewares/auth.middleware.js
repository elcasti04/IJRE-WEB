import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({ message: 'Token requerido' })
    }


    const token = authHeader.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'Token inválido' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findByPk(decoded.id, {
      attributes: { exclude: ['password'] }
    })

    if (!user) {
      return res.status(401).json({ message: 'Usuario no válido' })
    }

    req.user = user
    next()

  } catch (error) {
    console.error(error)
    return res.status(401).json({ message: 'Token inválido o expirado' })
  }
}
