import "./style/contacto.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vclkdnc", // Service ID
        "template_mnlfrmx", // Template del formulario
        form.current,
        "ZurLCXbRDy-MeOE9n" // Public Key
      )
      .then(
        () => {
          alert("¡Mensaje enviado correctamente!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Ocurrió un error al enviar el mensaje.");
        }
      );
  };

  return (
    <main className="contacto container-fluid col">
      <h1>¡Queremos saber de ti!</h1>

      <div className="container-fluid d-flex justify-content-around align-items-center">
        <form
          ref={form}
          onSubmit={enviarCorreo}
          className="formulario d-flex flex-column col-12 col-md-4"
        >
          <h3 className="text-center">Formulario</h3>

          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            name="name"
            placeholder="Tu Nombre"
            required
          />

          <label htmlFor="correo">Correo:</label>
          <input
            id="correo"
            type="email"
            name="email"
            placeholder="Tu Correo"
            required
          />

          <label htmlFor="msg">Mensaje:</label>
          <textarea
            id="msg"
            name="message"
            placeholder="Escríbenos tu mensaje"
            rows="6"
            required
          ></textarea>

          <button type="submit" className="text-white">
            Enviar
          </button>
        </form>

      <div className="donaciones container">
        <div className="d-flex flex-column justify-content-center">
            <h3 className="redes text-center">Donaciones</h3>

            <div className="redes p-3">
              <p>
                Tu aporte es una semilla que nos permite seguir expandiendo el Reino de Dios. 
                Cada donación, sin importar su tamaño, contribuye al crecimiento del 
                ministerio y al cumplimiento de la misión que Dios nos ha encomendado.
                <hr />
                <div className="d-flex justify-content-around align-items-center">
                <fieldset>
                  <legend>Cuenta de Ahorros Bancolombia</legend>
                  ° 50639956986
                </fieldset>
                <fieldset>
                  <legend>Nequi</legend>
                  ° 310 764 7687
                </fieldset>
                <fieldset>
                  <legend>Daviplata</legend>
                  ° 310 764 7687
                </fieldset>
                </div>
                <hr />
                <span>
                  "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre."
                  <br />
                  2 Corintios 9:7</span>
              </p>
            </div>
          </div>
      </div>
      </div>
      <br />

      <div className="contac col-12 col-md-9">
          <h3 className="redes text-center">Redes</h3>

          <div className="redes d-flex justify-content-around p-4">
            <p className="logoApp"
            onClick={() => window.open("https://wa.me/573107647687", "_blank")}
            >
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/100/whatsapp--v1.png"
                alt="WhatsApp"
              />
              whatsApp
            </p>

            <p className="logoApp">
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/100/instagram-new--v1.png"
                alt="Instagram"
              />
              Instagram
            </p>

            <p className="logoApp">
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/100/facebook-new.png"
                alt="Facebook"
              />
              facebook
            </p>

            <p className="logoApp"
            onClick={() => window.open('https://www.youtube.com/@JesucristoReyEternooficial')}
            >
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/100/youtube-play.png"
                alt="YouTube"
              />
              Youtube
            </p>
          </div>
        </div>
    </main>
  );
};

export default Contacto;