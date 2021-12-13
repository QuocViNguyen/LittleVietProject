import * as React from 'react';
import Grid from '@mui/material/Grid';
import logo from '../Media/logo_tran.png';
import NavBarMenu from './NavBarMenu';

export function NavBar()
{
    var listenScrollEvent = e =>
    {
        if (window.scrollY > 50)
        {
            document.getElementById('NavBar').style.background = "rgba(255, 255, 255, 0.6)";
        }
        else
        {   
            document.getElementById('NavBar').style.background = "transparent";
        }
    }

    window.addEventListener('scroll', listenScrollEvent);

    return (
        <div id='NavBar' className="fixed w-screen top-0">
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


