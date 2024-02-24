import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import classes from './SearchBar.module.scss';

export const SearchBar = () => {
    return (
        <div className={classes.search}>
            <div className={classes.searchIconWrapper}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                className={classes.styledInputBase}
                inputProps={{'aria-label': 'search'}}
            />
        </div>
    );
};