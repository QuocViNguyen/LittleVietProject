import * as React from 'react';
import Grid from '@mui/material/Grid';

function Drink(props) {
    return (
        <div className='flex gap-4 text-gray-100'>
            <Grid container rowSpacing={0.3} columnSpacing={0.3} justifyContent="center" alignItems="center">
            <Grid item xs={6} md={6} className=''>
                <p>{props.name}</p>
                </Grid>
                <Grid item xs={6} md={6} className=''>
                <p>${props.price}</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default Drink;