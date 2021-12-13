import * as React from 'react';
import orderPic from '../Media/orderpic.jpg';
import Grid from '@mui/material/Grid';
import { Link } from '@material-ui/core';
import { Divider } from '@mui/material';
import UberEats from '../Media/ubereats.jpg';
import Doordash from '../Media/doordash.jpg';
import SkipTheDishes from '../Media/skipthedishes.jpg';

function Order() {
    return (
        <div className='flex-col min-h-screen justify-center bg-gradient-to-r from-yellow-200 via-pink-100 to-yellow-100'>
            <br/><br/><br/><br/><br/><br/>
            <Grid container className='justify-items-center' rowSpacing={5} columnSpacing={1} alignItems="center">
                <Grid item xs={12} md={3} className='spacer'/>
                <Grid item xs={12} md={6} className='spacer text-xl sm:text-3xl font-semibold text-center'>
                    <p>ORDER PICK UP</p>
                    <Divider/>
                </Grid> 
                <Grid item xs={0} md={3} className='spacer'/>

                <Grid item xs={12} md={3} className='spacer'/>
                <Grid item xs={12} md={2} className='spacer sm:w-auto justify-items-center'>
                    <img alt='' src={orderPic} className='w-6/12 mr-auto ml-auto'></img>
                </Grid>  

                <Grid item xs={12} md={4} className='spacer text-lg sm:text-2xl text-center'>
                    <p>LITTLE VIET WINNIPEG</p>
                    <p>2565 Portage Ave #104, Winnipeg, MB R3J 0P4</p>
                    <p>CALL AND ORDER NOW: <Link href="tel:2043063979">(204) 306-3979</Link></p>
                </Grid>  
                <Grid item xs={12} md={3} className='spacer'/>
            </Grid>

            <br/><br/><br/>

            <Grid container className='justify-items-center' rowSpacing={5} columnSpacing={5} alignItems="center">
                <Grid item xs={12} md={3} className='spacer'/>
                <Grid item xs={12} md={6} className='spacer text-xl sm:text-3xl font-semibold text-center'>
                    <p>ORDER ONLINE</p>
                    <Divider/>
                </Grid> 
                <Grid item xs={0} md={3} className='spacer'/>

                <Grid item xs={12} md={4.5} className='spacer'/>
                <Grid item xs={4} md={1} className='spacer'>
                    <Link href='https://www.ubereats.com/ca/store/little-viet/1eIOyrdISc6ae25WZ_JLsA'>
                        <img alt='' src={UberEats} className='online_store'/>
                    </Link>
                </Grid>  
                <Grid item xs={4} md={1} className='spacer'>
                    <Link href='https://www.skipthedishes.com/little-viet?gclid=Cj0KCQiA2NaNBhDvARIsAEw55hg_sICNYClBOcMdIWgDwPf-Fv9JnFicR9XW1Fm1-AWB4ilb3DE-xGgaAiTdEALw_wcB&gclsrc=aw.ds'>
                        <img alt='' src={SkipTheDishes} className='online_store'/>
                    </Link>
                </Grid>  
                <Grid item xs={4} md={1} className='spacer text-2xl text-center'>
                    <Link href='https://www.doordash.com/store/little-viet-winnipeg-1561762/'>
                        <img alt='' src={Doordash} className='online_store'/>
                    </Link>
                </Grid>  
                <Grid item xs={0} md={4.5} className='spacer'/>
            </Grid>
            <br/>
        </div>
    );
}

export default Order;