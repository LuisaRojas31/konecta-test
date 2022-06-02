import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '../Drawer';

const ButtonAppBar = () => {
    const [state, setState] = React.useState({
        left: false,
    });
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setState({left: true})}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Konecta Cafetería
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
        <Drawer state={state} setState={setState} />
        </>
    );
}

export default ButtonAppBar;
