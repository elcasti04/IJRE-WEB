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

      <div className="container-fluid d-flex justify-content-around">
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

        <div className="contac col-12 col-md-6">
          <h3 className="text-center">Redes</h3>

          <div className="redes d-flex justify-content-around p-4">
            <p className="logoApp">
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/100/whatsapp--v1.png"
                alt="WhatsApp"
              />
            </p>

            <p className="logoApp">
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/100/instagram-new--v1.png"
                alt="Instagram"
              />
            </p>

            <p className="logoApp">
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/100/facebook-new.png"
                alt="Facebook"
              />
            </p>

            <p className="logoApp">
              <img
                width="70"
                height="70"
                src="https://img.icons8.com/color/100/youtube-play.png"
                alt="YouTube"
              />
            </p>
          </div>

          <div className="d-flex flex-column justify-content-center">
            <h3 className="text-center">Donaciones</h3>

            <p className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              molestiae amet omnis, optio possimus ab atque inventore fugiat
              deserunt est hic sapiente voluptatibus nisi unde pariatur iste
              facere a veritatis!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacto;