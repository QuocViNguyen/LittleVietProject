import * as React from 'react';
import Grid from '@mui/material/Grid';
import logo from '../Media/logo_tran.png';
import NavBarMenu from './NavBarMenu';

export function NavBar()
{
    return (
        <div className="fixed w-screen">
            <Grid container rowSpacing={0.3} columnSpacing={0.3} justifyContent="center" alignItems="center">
                <Grid item xs={4} md={1} className='spacer' />
                <Grid item xs={4} md={3} className=''>
                    <img src={logo} alt="logo" className="p-0 w-24 h-auto" />
                </Grid>
                <Grid item xs={4} md={4} className='spacer' />
                <Grid item xs={4} md={3} className=''>
                    <div className='flex justify-end'>
                        <NavBarMenu/>
                    </div>
                </Grid>
                <Grid item xs={4} md={1} className='spacer'/>
            </Grid>
        </div>
    );
}


