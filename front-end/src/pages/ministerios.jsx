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
            }
        },
        {
            ministerio: 'Jovenes',
            mision : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            vision : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            planDeTrabajo : 'Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.Un espacio de comunión, oración y estudio bíblico para las mujeres de la iglesia, fortaleciendo el hogar y la congregación.',
            ejesDeTrabajo : {
                educacion : 'Un espacio de comunión, oración y estudio bíblico para las mujeres',
                servicio : 'Un espacio de comunión, oración y estudio bíblico para las mujeres'
            }
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
                <i>
                    Tenemos espacios para todas las etapas de la vida. Cada ministerio está comprometido con el crecimiento en la fe y el amor fraternal.
                </i>
            </p>
                
                <div className="list-ministerios d-flex gap-5 text-white justify-content-center">
                    {ministerios.map((ministerio, index) => (
                <div key={index}>
                    <p onClick={() => setMins(ministerio)}
                        style={{
                            cursor: "pointer",
                            textAlign:'center',
                            width:'100',
                            alignItems:'center',
                            borderBottom: mins === ministerio ? "3px solid rgb(255, 0, 0)" : "none",
                            fontWeight: mins === ministerio ? "bold" : "normal"
                        }} >{ministerio}
                    </p>
                </div>
                ))}
                </div>

                {ministerioActual && (
                    <main>
                        <h3>Ministerio {ministerioActual.ministerio}</h3>
                        <div className="row  m-0 d-flex " style={{ minHeight: "500px" }}>
    
                            <div className="col-md-8 d-flex flex-wrap gap-2 p-0">

                                <div className="info-card col-md-5  p-3">
                                    <h3>Misión</h3>
                                    <p>{ministerioActual.mision}</p>
                                </div>

                                <div className="info-card col-md-5  p-3">
                                    <h3>Visión</h3>
                                    <p>{ministerioActual.vision}</p>
                                </div>

                                <div className="info-card col-md-10  p-3">
                                    <h3>Plan de Trabajo</h3>
                                    <p>{ministerioActual.planDeTrabajo}</p>
                                </div>

                            </div>


                            <div className="col-md-4 border rounded  d-flex align-items-center justify-content-center p-0 overflow-hidden">
                                <img
                                    src={ministerioActual.imagen}
                                    alt={ministerioActual.nombre}
                                    className="img-fluid w-100 h-100 p-2 rounded"
                                    style={{
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>
                    </main>
                )}
                
            
        </main>
        </>
    )
}



export default Ministerios