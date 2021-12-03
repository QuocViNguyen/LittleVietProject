import * as React from 'react';
import Grid from '@mui/material/Grid';
import logo from '../Media/logo_tran.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function NavBar(value, handleChange)
{
    return (
        <div className="fixed w-screen">
            <Grid container rowSpacing={0.3} columnSpacing={0.3} justifyContent="center" alignItems="center">
                <Grid item xs={4} md={1} className='spacer' />
                <Grid item xs={4} md={3} className=''>
                    <img src={logo} className='p-0' alt="logo" className="w-24 h-auto" />
                </Grid>
                <Grid item xs={4} md={4} className='spacer' />
                <Grid item xs={4} md={3} className=''>
                    <div className='flex justify-end'>
                        {NavBarMenu(value, handleChange)}
                    </div>
                </Grid>
                <Grid item xs={4} md={1} className='spacer' />
            </Grid>
        </div>
    );
}

function NavBarMenu(value, handleChange)
{
    return <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<HomeIcon />} label="HOME" />
        <Tab icon={<FastfoodIcon />} label="DRINK" />
        <Tab icon={<StoreIcon />} label="MERCHANDISE" />
        <Tab icon={<ShoppingCartIcon />} label="ORDER" />
    </Tabs>;
}
