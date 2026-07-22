import "./style/footer.css";

const Footer = () => {
    return (
        <footer className="foot" id="Contacto">
            <div className="container">
                <div className="row gy-5">

                    {/* Información */}
                    <div className="col-lg-4 col-md-6">
                        <h3 className="footer-title">
                            Iglesia Evangélica <br />
                            Jesucristo Rey Eterno
                        </h3>

                        <h5 className="footer-subtitle">
                            IEJRE - IREP
                        </h5>

                        <p>
                            Un lugar donde adoramos a Dios, fortalecemos nuestra fe
                            y compartimos el amor de Cristo con toda nuestra comunidad.
                        </p>
{/* 
                        <div className="social-icons">

                            <a href="#">
                                <img
                                    src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                                    alt="Facebook"
                                />
                            </a>

                            <a href="#">
                                <img
                                    src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png"
                                    alt="Whatsapp"
                                />
                            </a>

                            <a href="#">
                                <img
                                    src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png"
                                    alt="Instagram"
                                />
                            </a>

                            <a href="#">
                                <img
                                   src="https://img.icons8.com/color/100/youtube-play.png"
                                    alt="Youtube"
                                />
                            </a>

                        </div> */}
                    </div>

                    {/* Contacto */}

                    <div className="col-lg-3 col-md-6">

                        <h3 className="footer-title">
                            Contacto
                        </h3>

                        <ul className="contact-list">

                            <li>
                                <div className="contact-icon">
                                    
                                </div>

                                <div>
                                    Cra. 5 #18-00 <br />
                                    San Pedro, Sucre
                                </div>
                            </li>

                            <li>

                                <div className="contact-icon">
                                    
                                </div>

                                <div>
                                    (+57)   300 000 0000
                                </div>

                            </li>

                            <li>

                                <div className="contact-icon">
                                    
                                </div>

                                <div>
                                    iglesia@email.com
                                </div>

                            </li>

                        </ul>

                    </div>

                    {/* Mapa */}

                    <div className="col-lg-5">

                        <h3 className="footer-title">
                            Nuestra ubicación
                        </h3>

                        <div className="map-container">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!4v1782039573297!6m8!1m7!1siwDkPCNUWUbbyyeYnXUzUg!2m2!1d9.396866532234935!2d-75.0619128689183!3f305.5704863493578!4f-7.602062442374802!5f0.7820865974627469"
                                loading="lazy"
                                allowFullScreen
                                title="Mapa"
                            ></iframe>

                        </div>

                    </div>

                </div>

                <hr />

                <div className="footer-bottom">
                    © 2026 Iglesia Evangélica Jesucristo Rey Eterno · Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
};

export default Footer;