import { useState } from "react";
import "./style/iglesias.css";

function Iglesias() {
    const [iglesiaInfo, setIglesiaInfo] = useState("Cicuco");

    const iglesias = [
        "Cicuco",
        "Magangué",
        "Santa Ana",
        "San Andres de Sotavento",
    ];

    const info = [
        {
            ubicacion: "Cicuco",
            nombre: "Iglesia Evangélica Príncipe de Paz",
            direccion:
                "Sector Punta de Cartagena Calle Buenos Aires Carrera 6 #10-39",
            culto: {
                domingo: "Domingo - Culto 9:30 AM",
                lunes: "",
                martes: "",
                miercoles: "",
                jueves: "Jueves - Culto 7:00 PM",
                viernes: "",
                sabado: "",
            },
            pastor: "Job David Quintero Martínez",
            telPastor: {
                tel1: "(300) 551-0385 (WhatsApp)",
                tel2: "(323) 588-3369 (Celular)",
            },
            emailPastor: "jobdavid19@hotmail.com",
            imagen:
                "https://images.squarespace-cdn.com/content/v1/5cc47111fd67936ea7134b21/1629392314112-X0XLBP37GYCFQAC44F9J/cicuco.jpg?format=500w",
        },
        {
            ubicacion: "Magangué",
            nombre: "Iglesia Evangélica Príncipe de Paz",
            direccion:
                "Sector Punta de Cartagena Calle Buenos Aires Carrera 6 #10-39",
            culto: {
                domingo: "Domingo - Culto 9:30 AM",
                lunes: "",
                martes: "",
                miercoles: "",
                jueves: "Jueves - Culto 7:00 PM",
                viernes: "",
                sabado: "",
            },
            pastor: "Yo que se",
            telPastor: {
                tel1: "(300) 551-0385 (WhatsApp)",
                tel2: "(323) 588-3369 (Celular)",
            },
            emailPastor: "jobdavid19@hotmail.com",
            imagen:
                "https://images.squarespace-cdn.com/content/v1/5cc47111fd67936ea7134b21/1629386879989-622WLFCUSRRKVOVUXSAI/zdenek-machacek-P4n7NQNOmFU-unsplash.jpg?format=500w",
        },
        {
            ubicacion: "Santa Ana",
            nombre: "Iglesia Príncipe de Paz Santa Ana",
            direccion: "Cra 8F #15-34",
            culto: {
                domingo: "Domingo - 9:00 AM",
                lunes: "",
                martes: "",
                miercoles: "",
                jueves: "",
                viernes: "",
                sabado: "",
            },
            pastor: "Henry López",
            telPastor: {
                tel1: "(310) 843-5940 (WhatsApp)",
                tel2: "",
            },
            emailPastor: "famlopin@gmail.com",
            imagen:
                "https://images.squarespace-cdn.com/content/v1/5cc47111fd67936ea7134b21/1629392326237-S4ZN35U3EAVWGBMV0TAR/Screen+Shot+2021-08-19+at+11.53.06+AM.png?format=500w",
        },
        {
            ubicacion: "San Andres de Sotavento",
            nombre: "Iglesia Evangélica Príncipe de Paz",
            direccion: "San Andrés de Sotavento",
            culto: {
                domingo: "Domingo - Culto 9:30 AM",
                lunes: "",
                martes: "",
                miercoles: "",
                jueves: "",
                viernes: "",
                sabado: "",
            },
            pastor: "Yo que se",
            telPastor: {
                tel1: "(300) 551-0385 (WhatsApp)",
                tel2: "",
            },
            emailPastor: "jobdavid19@hotmail.com",
            imagen:
                "https://images.squarespace-cdn.com/content/v1/5cc47111fd67936ea7134b21/1556557901073-RC8KYJE5ZAHXSCQG4MNZ/piedecuesta.jpg?format=500w",
        },
    ];

    const iglesiaActual = info.find(
        (item) => item.ubicacion === iglesiaInfo
    );

    return (
        <main className="iglesias container-fluid">

            <h4>
                <strong>
                    <span className="inicial">C</span>omunidad Eclesiástica
                </strong>
            </h4>

            <h1>
                Somos una familia que ama la
                <br />
                Palabra de Dios
            </h1>

            <p className="descripcion">
                <i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Non dignissimos mollitia eos ipsam? Perferendis debitis
                    necessitatibus numquam quis voluptates quaerat illo tempora
                    ex?
                </i>
            </p>

            <div className="container">

                <div className="lista-iglesias">

                    {iglesias.map((iglesia) => (

                        <ul key={iglesia}>

                            <li
                                onClick={() => setIglesiaInfo(iglesia)}
                                style={{
                                    cursor: "pointer",
                                    listStyle: "none",
                                    borderBottom:
                                        iglesia === iglesiaInfo
                                            ? "3px solid #01069b"
                                            : "none",
                                    fontWeight:
                                        iglesia === iglesiaInfo
                                            ? "bold"
                                            : "normal",
                                }}
                            >
                                {iglesia}
                            </li>

                        </ul>

                    ))}

                </div>

                {iglesiaActual && (

                    <div className="contenedor">

                        <div className="imagen">

                            <img
                                src={iglesiaActual.imagen}
                                alt={iglesiaActual.nombre}
                            />

                        </div>

                        <div className="infor">

                            <h2>{iglesiaActual.nombre}</h2>

                            <p>
                                <strong>Dirección</strong>
                                <br />
                                <span>{iglesiaActual.direccion}</span>
                            </p>

                            <p className="d-flex flex-column">
                                <strong>Cultos</strong>

                                {Object.values(iglesiaActual.culto)
                                    .filter(Boolean)
                                    .map((culto, index) => (
                                        <span key={index}>{culto}</span>
                                    ))}
                            </p>

                            <p className="d-flex flex-column">
                                <strong>Pastor</strong>

                                <span>{iglesiaActual.pastor}</span>

                                {iglesiaActual.telPastor.tel1 && (
                                    <span>{iglesiaActual.telPastor.tel1}</span>
                                )}

                                {iglesiaActual.telPastor.tel2 && (
                                    <span>{iglesiaActual.telPastor.tel2}</span>
                                )}

                                <span>{iglesiaActual.emailPastor}</span>

                            </p>

                        </div>

                    </div>

                )}

            </div>

        </main>
    );
}

export default Iglesias;