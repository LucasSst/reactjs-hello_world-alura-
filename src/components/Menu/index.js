import "./Menu.css"
import MenuLink from "../MenuLink";

const Menu = () => {
    return (
        <header>
            <ul  className="navegacao">
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/about-me">About Me</MenuLink>
            </ul>
        </header>
    )
}

export default Menu;