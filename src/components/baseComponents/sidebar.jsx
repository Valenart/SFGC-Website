
import React from 'react';
import { Drawer, Box } from '@mui/material';

export default function Sidebar({ isOpen, onClose }) {


    return (
        <Drawer anchor="left" open={isOpen} onClose={onClose}>
            {/*{drawerList}*/}
        </Drawer>
    );
}