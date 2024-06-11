import styles from "./Footer.module.css"
import { ReactComponent as Trademark} from 'assets/marca_registrada.svg'
const Footer = () => {
    return (
        <footer className={styles.rodape}>
            <Trademark/> Desenvolvido por Lucas Teixeira
        </footer>
    )
}
export default Footer;