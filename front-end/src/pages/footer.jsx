import './style/footer.css'

export const Footer = () => {
    return (
        <footer className="foot">
            <div className="container">
                <div className="row gy-4">

                    
                    <div className="col-lg-4 col-md-6">
                        <h3 className="footer-title">
                            Iglesia Evangélica Jesucristo Rey Eterno
                        </h3>

                        <h5 className="footer-subtitle">
                            IEJRE - IREP
                        </h5>

                        <p>
                            Un lugar donde adoramos a Dios, fortalecemos la fe y
                            compartimos el amor de Cristo con nuestra comunidad.
                        </p>

                        <div className="social-icons">
                            <a href="#">
                                <img
                                    src="https://img.icons8.com/ios/50/facebook-new.png"
                                    alt="Facebook"
                                />
                            </a>

                            <a href="#">
                                <img
                                    src="https://img.icons8.com/ios/50/whatsapp--v1.png"
                                    alt="Whatsapp"
                                />
                            </a>

                            <a href="#">
                                <img
                                    src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                                    alt="Instagram"
                                />
                            </a>

                            <a href="#">
                                <img
                                    src="https://img.icons8.com/ios/50/youtube-play--v1.png"
                                    alt="Youtube"
                                />
                            </a>
                        </div>
                    </div>

                   
                    <div className="col-lg-3 col-md-6">
                        <h3 className="footer-title">Contacto</h3>

                        <ul className="contact-list">
                            <li><span className="social-icons bg-white rounded p-1"><img width="20" height="30" src="https://img.icons8.com/ios-filled/50/place-marker--v1.png" alt="place-marker--v1"/></span> 18 Cra. 5 San Pedro, Sucre</li>
                            <li><span className="social-icons bg-white rounded p-1"><img width="20" height="30" src="https://img.icons8.com/tiny-bold/16/phone.png" alt="phone"/></span> (+1) 123 456 7890</li>
                            <li><span className="social-icons bg-white rounded p-1"><img width="20" height="30" src="https://img.icons8.com/ios-filled/50/new-post.png" alt="new-post"/></span> IEJRE@email.com</li>
                        </ul>
                    </div>

                    
                    <div className="col-lg-5">
                        <h3 className="footer-title">Ubicación</h3>

                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!4v1782039573297!6m8!1m7!1siwDkPCNUWUbbyyeYnXUzUg!2m2!1d9.396866532234935!2d-75.0619128689183!3f305.5704863493578!4f-7.602062442374802!5f0.7820865974627469"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa Iglesia"
                            />
                        </div>
                    </div>

                </div>

                <hr />

                <div className="footer-bottom">
                    © 2026 Iglesia Evangélica Jesucristo Rey Eterno |
                    Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;