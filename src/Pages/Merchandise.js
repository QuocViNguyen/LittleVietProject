import * as React from 'react';
import bag from '../Media/bag.jpg';
import cup from '../Media/cup.jpg';
import rainbow_set from '../Media/rainbow_set.jpg';
import rose_gold from '../Media/rose_gold.jpg';
import silver from '../Media/silver.jpg';
import Grid from '@mui/material/Grid';

function Merchandise() {
    return (
        <div className='flex-col min-h-screen justify-center bg-gradient-to-r from-yellow-200 via-pink-100 to-yellow-100'>
            <Grid container className='justify-items-center' rowSpacing={10} columnSpacing={0.3} alignItems="center">
                <Grid item xs={12} md={12} className='spacer text-center'>
                    <br/><br/><br/><br/><br/><br/>
                    <p className='font-normal text-lg sm:text-2xl'>🎁 COME AND HAVE A LOOK AT OUR CUTE MERCHANDISES 🎁</p>
                </Grid>
                <Grid item xs={12} md={4} className='spacer text-center text-xl'>
                    <div className='flex justify-center'>
                        <img className="w-24 sm:w-64" alt="" src={bag} />
                        <img className="w-24 sm:w-64" alt="" src={rainbow_set} />
                    </div>
                    <p className='pt-2 text-sm sm:text-base'>Straw Kit (Rainbow Version) - $8.00</p>
                </Grid>
                <Grid item xs={12} md={4} className='spacer text-center text-xl'>
                    <div className='flex justify-center'>
                        <img className="w-24 sm:w-64" alt="" src={bag} />
                        <img className="w-24 sm:w-64" alt="" src={rose_gold} />
                    </div>
                    <p className='pt-2 text-sm sm:text-base'>Straw Kit (Rose Gold Version) - $8.00</p>
                </Grid>
                <Grid item xs={12} md={4} className='spacer text-center text-xl'>
                    <div className='flex justify-center'>
                        <img className="w-24 sm:w-64" alt="" src={bag} />
                        <img className="w-24 sm:w-64" alt="" src={silver} />
                    </div>
                    <p className='pt-2 text-sm sm:text-base'>Straw Kit (Silver Version) - $7.50</p>
                </Grid>

                <Grid item xs={12} md={4} className='spacer text-center text-xl'>
                    <div className='flex justify-center'>
                        <img className="w-24 sm:w-64" alt="" src={cup}></img>
                    </div>
                    <p className='pt-2 text-sm sm:text-base'> Milk Tea Bottle - $3.00</p>
                </Grid>
            </Grid>
            <br/><br/><br/>
        </div>
     );
}

export default Merchandise;
