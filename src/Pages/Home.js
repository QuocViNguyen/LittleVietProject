import * as React from 'react';
import { Box, Button } from '@material-ui/core';
import blurbg from '../Media/blurbg.jpg';
import HomePic from '../Media/HomePic.jpg';
import Grid from '@mui/material/Grid';
import p1 from '../Media/p1.png';
import p2 from '../Media/p2.png';
import p3 from '../Media/p3.png';
import p4 from '../Media/p4.png';
import p5 from '../Media/p5.png';
import p6 from '../Media/p6.png';
import p7 from '../Media/p7.png';
import p8 from '../Media/p8.png';
import p9 from '../Media/p9.png';

function Home() {
    return (
        <div className='h-screen w-screen overflow-x-hidden overflow-y-scroll flex justify-center align-middle bg-gradient-to-r from-yellow-200 via-pink-100	to-yellow-100'>
            <Box className='w-10/12 sm:w-2/5 h-auto my-32'>
                <Grid container rowSpacing={0.3} columnSpacing={0.3} justifyContent="center" alignItems="center">
                    <Grid item xs={4} md={4} className=''>
                        <img src={p1} className='p-0' alt="p1"/>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img src={p4} className='p-0' alt="p4"/>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img src={p7} className='p-0' alt="p7"/>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img src={p2} className='p-0' alt="p2"/>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img src={p5} className='p-0' alt="p5"/>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img src={p8} className='p-0' alt="p8"/>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img src={p3} className='p-0' alt="p3"/>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img src={p6} className='p-0' alt="p6"/>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <img src={p9} className='p-0' alt="p9"/>
                    </Grid>
                </Grid>
            </Box>
        </div>

    );
}

export default Home;