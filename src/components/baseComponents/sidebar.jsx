import React, { useState } from 'react';
import { Drawer, Button, Box } from '@mui/material';

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const drawerList = (
        <Box sx={{ width: 250, p: 2 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            teste
        </Box>
    );

    return (
        <>
            <Button variant="contained" onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                {drawerList}
            </Drawer>
        </>
    );
}        