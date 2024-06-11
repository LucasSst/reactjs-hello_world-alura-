import styles from './ButtonMain.module.css'

const ButtonMain = ({children, tamanho}) => {
    return (
    <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`} type="button">{children}</button>
)   
}

export default ButtonMain;