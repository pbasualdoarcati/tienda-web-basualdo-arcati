//Elements and modules

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

//Style

import './Spinner.scss'

function Spinner() {
    return (
        <Box className='spinnerClass' sx={{ display: 'flex' }}>
            <p className='spinnerText'>Cargando por favor espere...</p>
            <CircularProgress className='spinnerEffect'/>
        </Box>
    );
}

export default Spinner