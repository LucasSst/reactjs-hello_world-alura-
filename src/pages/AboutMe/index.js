import ModelPost from "components/ModelPost";
import fotoCapa from "assets/sobre_mim_capa.png";
import AboutMePhoto from "assets/sobre_mim_foto.png"
import styles from "./AboutMe.module.css"
const AboutMe = () => {
    return (
        <ModelPost
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Lucas
            </h3>

            <img
                src={AboutMePhoto}
                alt="Foto do Lucas sorrindo"
                className={styles.fotoSobreMim}
            />


            <p className={styles.paragrafo}>
                Oi, tudo bem?Eu sou aluno do ONE BR Front-end Turma 6 da Alura e estou feliz de te ver por aqui.
            </p>

            <p className={styles.paragrafo}>
                Sou um apaixonado por tecnologia e os funcionamentos das mesmas. 
            </p>



            <p className={styles.paragrafo}>
                Comecei a estudar primeiramente HTML5 e CSS em 2019 e apaixonei-me em descobrir o funcionamento dos sites por trás do código! 
            </p>
            
            <p className={styles.paragrafo}>
                Nos anos seguinte já iniciei o estudo de linguagens, frameworks e bibliotecas como por exemplo o Bootstrap, JavaScript, TypeScript, ReactJS, Angular, Ruby, UX Designer, PHP, NextJs.
            </p>
        </ModelPost>

    )

}

export default AboutMe;