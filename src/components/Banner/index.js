import styles from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.jpeg"
const Banner = () => {

    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
            

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Lucas Teixeira, aluno do ONE BR Front-end Turma 6 da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)

                </p>
            </div>

            <div className={styles.imagens}>
                <img  className={styles.circuloColorido}
                src={circuloColorido}
                alt="circulo colorido"
                aria-hidden={true}
                />
                
                <img className={styles.minhaFoto}
                src={minhaFoto}
                alt="Foto do Lucas com joinha"
                aria-hidden={true}
                />

            </div>
        </div>
    )

}


export default Banner;