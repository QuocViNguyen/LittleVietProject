import * as React from 'react';
import Grid from '@mui/material/Grid';

function Drink(props) {
    return (
        <div className='flex gap-4 text-gray-100'>
            <Grid container rowSpacing={2} columnSpacing={3} className='pb-1'>
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