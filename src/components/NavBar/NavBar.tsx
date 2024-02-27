import {SearchBar} from "./SearchBar/SearchBar.tsx";
import classes from './NavBar.module.scss';
import {Draw} from "./Draw/Draw.tsx";

const NavBar = () => {
    return (
        <nav className={classes.navbar}>
            <Draw/>
            <SearchBar/>
            <div className={classes.Links}>
                <a href="/">Categories</a>
                <a href="/">Website Builders</a>
                <a href="/">Today's deals</a>
            </div>
        </nav>
    )
}

export default NavBar