import * as React from 'react';
import menu from "../Media/menu.json";
import DrinkSection from '../Components/DrinkSection';
import Grid from '@mui/material/Grid';

function Menu()
{
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={5} className='pt-48'>
                {RenderDrinkSection(menu)}
            </Grid>
        </>
    );
}

export default Menu;

function RenderDrinkSection(menu)
{
    let drinkSections = [];
    for (let index = 0; index < menu.length; index++)
    {   
        var drinkSection = menu[index];
        var drinkSectionComponent = 
        <Grid item xs={6} md={4} className='' key={index}>
            <DrinkSection drinkTitle={drinkSection.DrinkType} subDrinkList={drinkSection.SubTypes}/>
        </Grid>
        ;
        drinkSections.push(drinkSectionComponent);
    }
    return drinkSections;
}