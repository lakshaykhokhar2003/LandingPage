import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import classes from './Draw.module.scss';


export const Draw: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <div className={classes.Drawer}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerOpen}
            >
                <MenuIcon/>
            </IconButton>
            <Drawer
                variant="temporary"
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                ModalProps={{
                    container: document.getElementById('root')!,
                    style: {
                        paddingRight: 0,
                    },
                }}
            >
                <List className={classes.List} sx={{padding: "20px 10px"}}>
                    <a href="#">
                        <ListItem onClick={handleDrawerClose}>
                            <ListItemText primary="Categories"/>
                        </ListItem>
                    </a>
                    <a href="#">
                        <ListItem onClick={handleDrawerClose}>
                            <ListItemText primary="Website Builders"/>
                        </ListItem>
                    </a>
                    <a href="#">
                        <ListItem onClick={handleDrawerClose}>
                            <ListItemText primary="Today's deals"/>
                        </ListItem>
                    </a>
                </List>
            </Drawer>
        </div>
    );
};


