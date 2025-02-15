import ButtonMain from "components/ButtonMain";
import styles from "./NotFound.module.css"

import erro404 from 'assets/erro_404.png'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div onClick={() => navigate(-1)} 
                className={styles.botaoContainer}>
                    <ButtonMain  tamanho='lg'>Voltar</ButtonMain>

                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            <div className={styles.espacoEmBranco}>
            </div>
        </>
    )

}


export default NotFound;