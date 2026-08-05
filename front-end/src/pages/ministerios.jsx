import './style/ministerios.css'
import { useState } from "react"

const Ministerios = () => {

    const ministerios = ['Damas', 'Caballeros', 'Jovenes', 'Niños']
    const [mins, setMins] = useState('Damas')
    const minis = [


        {
            ministerio: 'Damas',
            mision : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            vision : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            planDeTrabajo : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            ejesDeTrabajo : {
                educacion : 'Un espacio de comunión, oración y estudio bíblico para las mujeres',
                servicio : 'Un espacio de comunión, oración y estudio bíblico para las mujeres'
            },
            imagen: 'https://tse1.mm.bing.net/th/id/OIP.Vau5WWxXi3d8eN9uIfcJ_QHaET?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3'
        },

        {
            ministerio: 'Caballeros',
            mision : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            vision : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            planDeTrabajo : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            ejesDeTrabajo : {
                educacion : 'Un espacio de comunión, oración y estudio bíblico para las mujeres',
                servicio : 'Un espacio de comunión, oración y estudio bíblico para las mujeres'
            },
            imagen:'/img/logo.jpeg'
        },
        {
            ministerio: 'Jovenes',
            mision : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            vision : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            planDeTrabajo : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            ejesDeTrabajo : {
                educacion : 'Un espacio de comunión, oración y estudio bíblico para las mujeres',
                servicio : 'Un espacio de comunión, oración y estudio bíblico para las mujeres'
            },
            imagen: '/img/logo2.jpeg'
        },
        {
            ministerio: 'Niños',
            mision : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            vision : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            planDeTrabajo : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            ejesDeTrabajo : {
                educacion : 'Un espacio de comunión, oración y estudio bíblico para las mujeres',
                servicio : 'Un espacio de comunión, oración y estudio bíblico para las mujeres'
            },
            imagen: 'https://tse1.mm.bing.net/th/id/OIP.4K0bIaHe8bBZ_M3a2iilqgHaHa?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3'
        }
    ]

    const ministerioActual = minis.find((item) => item.ministerio === mins)

    return (
        <>
        <main className="ministerios container col">
            
            <h1>Un lugar para cada uno</h1>
            <p className='col-9'>
                    Tenemos espacios para todas las etapas de la vida. Cada ministerio está comprometido con el crecimiento en la fe y el amor fraternal.
            </p>

                 <div className="list-ministerios">
                    {ministerios.map((ministerio, index) => (
                <div key={index}>
                    <p onClick={() => setMins(ministerio)}
                        style={{
                            cursor: "pointer",
                            textAlign:'center',
                            width:'100',
                            alignItems:'center',
                            borderBottom: mins === ministerio ? "3px solid #000000" : "none",
                        }} >{ministerio}
                    </p>
                </div>
                ))}
                </div>

                {ministerioActual && (
                    <main className="col-12 p-3">
                        <div className="">
    
                            <div className="primero col-12 d-flex flex-wrap justify-content-between">

                                <div className="mision info-card col-12 col-md-5 border-right">
                                    <h3>Misión</h3>
                                    <p>{ministerioActual.mision}</p>
                                </div>
                                <div className="vision info-card col-12 col-md-5">
                                    <h3>Visión</h3>
                                    <p>{ministerioActual.vision}</p>
                                </div>
                            </div>
                            <hr />
                            <div className='segundo d-flex justify-content-between'>
                                <div className="info-card col-md-7">
                                    <h3>Vida Comunitaria</h3>
                                    <p>{ministerioActual.planDeTrabajo}</p>
                                </div>
                                <img className='col-md-4 border p-2' src={ministerioActual.imagen} alt="" />
                            </div>
                        </div>
                    </main>
                )}

        </main>
        </>
    )
}



export default Ministerios