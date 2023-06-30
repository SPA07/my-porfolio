import "../styles/about.css";
import profileImg from "../src/assets/7CAEB350-19AC-4094-8B1E-8B200DAA1C22-removebg-preview.png";

const About = () => {
  const presentation = "Hola, soy un desarrollador frontend apasionado por la tecnología, laciencia y los videojuegos. Siempre busco estar al día con las últimas tendencias en programación y mejorar mi trabajo aprendiendo nuevas habilidades y tecnologías. Además de mi trabajo, disfruto de la compañía de mis gatos, juego videojuegos y sigo los últimos avances en áreas como la biotecnología, la inteligencia artificial y la astrofísica. Soy un ávido aprendiz y siempre busco crecer en micarrera y en mi vida personal."

  return (
    <main id="about">
      <h1 className="about-title">
        <span className="colored">{"<"}</span>Salvador <span className="last-name">Pineda</span> <span className="colored">{"/>"}</span>
      </h1>
      <section className="about-container">
        <p className="about-art">
          {presentation}
        </p>

        <img className="profileImg" src={profileImg} alt="" />
      </section>
    </main>
  );
};

export default About;
