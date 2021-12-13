import * as React from 'react';
import Menu_1 from '../Media/Menu_1.png';
import Menu_2 from '../Media/Menu_2.png';
import Menu_3 from '../Media/Menu_3.png';
import Menu_4 from '../Media/Menu_4.png';
import Grid from '@mui/material/Grid';

function Menu()
{
    return (
        <>
            <div className='bg-menu-bg'>
            <Grid container rowSpacing={0.3} columnSpacing={0.3} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12} className='spacer text-center'>
                <br/><br/><br/><br/><br/><br/>
                <p className='font-semibold text-4xl'>SELECT FROM OUR MENU:</p>
                <br/><br/>
            </Grid>
            <Grid item xs={1} md={1} className='spacer'/>
            <Grid className='flex-col justify-center' item xs={10} md={10} className=''>
                {RenderMenus()}
            </Grid>
            <Grid item xs={1} md={1} className='spacer'/>
            </Grid>
            <br/><br/><br/>
            </div>
        </>
    );
}

function RenderMenus()
{
    const menus = [Menu_1, Menu_2, Menu_3, Menu_4];
    var MenuComponent = [];

    menus.forEach(menu =>
    {
        var singleMenu = 
        <div key={menus.indexOf(menu)}>
            <img alt={menus.indexOf(menu)} src={menu} className='border-black border-2'></img>
            <br/>
        </div>;
        MenuComponent.push(singleMenu);
    });
    return MenuComponent;
}

export default Menu;