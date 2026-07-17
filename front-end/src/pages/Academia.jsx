import './style/academia.css'
import { useState, useEffect } from 'react'


function Academia () {
        
    const seminario = {
        rector : 'Marco Fidel Orozco Santana',
        ftRector : 'https://tse3.mm.bing.net/th/id/OIP.xJ2Zt7I5C_Axd_NPh4m5YQHaEC?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3',
        logo : 'https://tse1.mm.bing.net/th/id/OIP.Z9fLCmBQYvC88J-basHVrwHaE8?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3',
        fotoEstudiantes : {
            f1 : 'https://tse1.explicit.bing.net/th/id/OIP.OhfQIxikufA7cJugKoiGBQHaEo?cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3',
            f2 : 'https://tse3.mm.bing.net/th/id/OIP.htzmM6SqS_93l20QBAt8_QHaE8?cb=thfc1falcon2&w=1500&h=1001&rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        descripcion : `Somos una familia que ama la Palabra de Dios Somos una congregación reformada en San Pedro, Sucre. Creemos que la Biblia es la autoridad suprema para la fe y la vida, y queremos que cada persona que llegue encuentre un hogar espiritual.`
    }

    const [imagenA, setImagenA] = useState(seminario.fotoEstudiantes.f1)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setImagenA((prev) => 
            prev === seminario.fotoEstudiantes.f1
            ? seminario.fotoEstudiantes.f2
            : seminario.fotoEstudiantes.f1)
        }, 3000)
        return () => clearInterval(intervalo)
    }, [seminario])
    
    return (
        <>
        <main className="academia container">
            <h1>Preparacion para la gran Comisión</h1>
            <p>
                <i>
                    Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo
                </i>
            </p>

            

            <div className="contenedor row g-4">

    <div className="col-lg-5">
        <div className="card-seminario rector">
            <h3>Rector</h3>

            <img
                src={seminario.ftRector}
                alt="Foto del rector"
            />

            <h5>{seminario.rector}</h5>
        </div>
    </div>

    <div className="col-lg-7">
        <div className="card-seminario logo-seminario">
            <img
                src={seminario.logo}
                alt="Logo del seminario"
            />
        </div>
    </div>

    <div className="col-lg-7">
        <div className="card-seminario descripcion">
            <h3>Descripción</h3>

            <p>{seminario.descripcion}</p>
        </div>
    </div>

    <div className="col-lg-5">
        <div className="card-seminario estudiantes">
            <h3>Estudiantes</h3>

            <div className="galeria-estudiantes">
                <img
                    src={imagenA}
                    alt="Estudiante 1"
                />

                
            </div>
        </div>
    </div>

</div>
        </main>
        </>
    )
}

export default Academia