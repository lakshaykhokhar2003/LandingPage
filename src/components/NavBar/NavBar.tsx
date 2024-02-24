import {SearchBar} from "./SearchBar/SearchBar.tsx";
import classes from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={classes.navbar}>
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