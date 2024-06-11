import styles from "./MenuLink.module.css"
import { Link, useLocation } from "react-router-dom";

const MenuLink = ({children, to}) => {
    const location = useLocation()
    return (
        <li 
            className={`
                ${styles.link } 
                ${location.pathname === to ? styles.linkHighLighted : ""}
            `}
        >
            <Link to={to}>{children}</Link>
        </li>
    )
}
export default MenuLink;