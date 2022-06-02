import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Product from '@mui/icons-material/ProductionQuantityLimits';
import Storefront from '@mui/icons-material/Storefront';
import { useNavigate } from 'react-router-dom';
import { defaultRoute, salesRoute } from '../../utils/constants';

export default function TemporaryDrawer({state, setState}) {
    const navigate = useNavigate();
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            {['Productos', 'Ventas'].map((text, index) => (
            <ListItem key={text} disablePadding onClick={() => {index % 2 === 0 ? navigate(defaultRoute) : navigate(salesRoute)}}>
                <ListItemButton>
                <ListItemIcon>
                    {index % 2 === 0 ? <Product /> : <Storefront />}
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        <Divider />
        </Box>
    );

    return (
        <div>
            <Drawer
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
        </div>
    );
}
