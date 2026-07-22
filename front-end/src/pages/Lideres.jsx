import axios from "axios";
import { useEffect, useState } from "react";
import "./style/lideres.css";

const API_URL = "http://localhost:3000";

const Lideres = () => {
    const [lideres, setLideres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [liderSeleccionado, setLiderSeleccionado] = useState(null);

    useEffect(() => {
        obtenerLideres();
    }, []);

    useEffect(() => {
        if (liderSeleccionado) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [liderSeleccionado]);

    const obtenerLideres = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/lideres`);

            setLideres(
                Array.isArray(data)
                    ? data
                    : data.liders || []
            );
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="lideres">
                <div className="loading">
                    <img
                        src="../../public/iconos/icons8-load.gif"
                        alt="Cargando..."
                    />
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="lideres">
                <div className="error">
                    <h3>⚠ Ocurrió un error</h3>
                    <p>{error}</p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="lideres">

                <div className="titulo-lideres">

                    <h1>
                        Personas que sirven con amor
                    </h1>

                    <p>
                        Dios ha levantado hombres y mujeres comprometidos con
                        Su obra para pastorear, enseñar y acompañar a nuestra
                        congregación. Conoce a quienes dedican su vida a servir
                        con humildad y amor.
                    </p>

                </div>

                {lideres.length === 0 ? (

                    <div className="sin-lideres">
                        <h2>⚠</h2>
                        <p>No hay líderes registrados por el momento.</p>
                    </div>

                ) : (

                    <div className="grid-lideres">

                        {lideres.map((lider) => (

                            <article
                                className="card-lider"
                                key={lider.id}
                            >

                                <div className="foto-lider">

                                    <img
                                        src={`${API_URL}${lider.image}`}
                                        alt={lider.nombre}
                                    />

                                </div>

                                <div className="contenido-lider">

                                    <span className="cargo">
                                        {lider.cargo}
                                    </span>

                                    <h3>
                                        {lider.nombre}
                                    </h3>

                                    <button
                                        className="btn-lider"
                                        onClick={() =>
                                            setLiderSeleccionado(lider)
                                        }
                                    >
                                        Conocer más
                                    </button>

                                </div>

                            </article>

                        ))}

                    </div>

                )}

            </section>

            {liderSeleccionado && (

                <div
                    className="overlay"
                    onClick={() => setLiderSeleccionado(null)}
                >

                    <div
                        className="modal-lider"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="cerrar"
                            onClick={() => setLiderSeleccionado(null)}
                        >
                            ✕
                        </button>

                        <div className="modal-imagen">

                            <img
                                src={`${API_URL}${liderSeleccionado.image}`}
                                alt={liderSeleccionado.nombre}
                            />

                        </div>

                        <div className="modal-contenido">

                            <span className="cargo">
                                {liderSeleccionado.cargo}
                            </span>

                            <h2>
                                {liderSeleccionado.nombre}
                            </h2>

                            <p>
                                {liderSeleccionado.info}
                            </p>

                        </div>

                    </div>

                </div>

            )}

        </>
    );
};

export default Lideres;