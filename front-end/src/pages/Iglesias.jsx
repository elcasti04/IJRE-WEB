import { useState } from "react";
import "./style/iglesias.css";

function Iglesias() {
    const [iglesiaInfo, setIglesiaInfo] = useState("Calvary");

    const iglesias = [
        "Calvary",
        "La Puerta",
        "Cicuco",
        "Magangué",
        "Santa Ana",
    ];

    const info = [
        {
            ubicacion: "Calvary",
            nombre: "Calvary",
            direccion:
                "Santa Marta Cr 21 # 29F-17 Av del Ferrocarril Los Faroles",
            culto: {
                domingo: "Domingo - Estudio Bíblico 8:00 AM y Servicio de Adoración 9:00 AM",
                lunes: "",
                martes: "",
                miercoles: "Miércoles - Estudios teológicos 6:30 PM",
                jueves: "",
                viernes: "Viernes - Oración 7:00 PM",
                sabado: "",
            },
            pastor: "Edison Flores",
            telPastor: {
                tel1: "(312) 650-6493 (WhatsApp)",
                tel2: "",
            },
            emailPastor: "pastoreedfz@gmail.com",
            imagen:
                "/img/calvary.png",
        },
        {
            ubicacion: "La Puerta",
            nombre: "La Puerta",
            direccion:
                "Santa Marta Cra 4 # 32- 66 Manzanares",
            culto: {
                domingo: "Domingo - Escuela Dominical 8:00 AM | Culto 9:15 AM",
                lunes: "",
                martes: "",
                miercoles: "Miércoles - Oración y Estudio Bíblico (Virtual) 6:00 PM",
                jueves: "",
                viernes: "",
                sabado: "",
            },
            pastor: "Anciano Gobernante Hector Hernandez | Anciano Gobernante Eber Enrique Navarro Morales",
            telPastor: {
                tel1: "(300) 482 2626 (WhatsApp Hector Hernandez)",
                tel2: "(311) 659 5646 (WhatsApp Eber Navarro)",
            },
            emailPastor: "iglesiareformadalapuerta@gmail.com",
            imagen:
                "/img/laPuerta.png",
        },
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
                "/img/cicuco.jfif",
        },
        {
            ubicacion: "Magangué",
            nombre: "Iglesia Evangélica Príncipe de Paz",
            direccion:
                "Sector Punta de Cartagena Calle Buenos Aires Carrera 6 #10-39",
            culto: {
                domingo: "Domingo - Culto 3:00 PM",
                lunes: "",
                martes: "",
                miercoles: "",
                jueves: "",
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
                "/img/magangue.jfif",
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
                "/img/santaAna.jfif",
        },
    ];

    const iglesiaActual = info.find(
        (item) => item.ubicacion === iglesiaInfo
    );

    return (
        <main className="iglesias container">
            <i>Comunidad</i>

            <h1>
                Somos una familia que ama la
                <br />
                Palabra de Dios
            </h1>

            <p className="descripcion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Non dignissimos mollitia eos ipsam? Perferendis debitis
                    necessitatibus numquam quis voluptates quaerat illo tempora
                    ex?
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
                                            ? "3px solid #000000"
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

                        <div className="iglesiaImagen">

                            <img
                                src={iglesiaActual.imagen}
                                alt={iglesiaActual.nombre}
                            />

                        </div>

                        <div className="infor">

                            <h2>{iglesiaActual.nombre}</h2>

                            <p>
                                <strong>Dirección</strong>
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

                                <strong>Email</strong>
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