import './style/comunidad.css'
import { useNavigate } from 'react-router-dom'

const Comunidad = () => {
    const navigate = useNavigate()
    return (
        <main className="comunidad container">
            <h1>Nuestra vida en comunidad</h1>
            <p>Creemos que la iglesia es mucho más que un lugar de reunión; es una familia donde cada persona encuentra amor, apoyo y la oportunidad de crecer en su relación con Dios. Nuestra vida en comunidad se fortalece cuando compartimos la fe, servimos con alegría y caminamos juntos en cada etapa de la vida.</p>
            <p>A través de nuestros cultos, grupos de discipulado, ministerios y actividades especiales, promovemos la unidad, el compañerismo y el servicio. Cada encuentro es una oportunidad para conocer más de Cristo, desarrollar nuestros dones y construir relaciones basadas en el amor, el respeto y la esperanza.</p>
            <p>Conoce más sobre nuestra comunidad visitando nuestra galería, donde compartimos los momentos más especiales de nuestra iglesia, reflejando la unidad, el servicio y el amor de Dios en cada actividad.
                <br />
                <br />
                <span onClick={() => navigate('/Galeria')}><strong>Ver Galeria</strong> ➡</span>
            </p>
        </main>
    )
}

export default Comunidad