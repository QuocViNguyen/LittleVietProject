//#region import
import * as React from 'react';
import { Box } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import treaturself from '../Media/treaturself.jpg';
import slogan from '../Media/slogan.png';
import homePic from '../Media/home.jpg';
//#endregion

function Home()
{
    return (
        <div className='overflow-x-hidden'>
            <div className='h-screen w-screen flex-col justify-center bg-gradient-to-r from-yellow-200 via-pink-100 to-yellow-100'>
                <div className=" flex justify-center">
                    <Box className='w-10/12 sm:w-4/12 h-auto my-40 text-center'>
                        <p className='font-normal text-sm sm:text-xl'>❤️ EVERYTHING IS ABOUT TO BE EVER BETTER ❤️</p>
                        <br/>
                        <img src={homePic} alt="home pic"></img>
                    </Box>
                </div>
            </div>
            <div className='flex-col justify-center bg-gray-100'>
                {AboutUsContent()}
            </div>
        </div>
    );
}
export default Home;


//#region components
function AboutUsContent()
{
    return (
    <>
        <br /><br />
        <Grid container rowSpacing={0.3} columnSpacing={0.3} justifyContent="center" alignItems="center">
            <Grid item xs={4} md={1} className='' />
            <Grid item xs={10} md={10} className='text-center'>
                <h3 className='text-lg sm:text-3xl font-semibold'>WELCOME TO LITTLE VIET</h3>
                <br />
                <Divider />
            </Grid>
            <Grid item xs={1} md={1} className='' />
        </Grid>
        <br /><br />
        <Grid container rowSpacing={0.3} columnSpacing={0.3} justifyContent="center" alignItems="center">
            <Grid item xs={0} md={1} className='' />
            <Grid item xs={5} md={4} className='text-center'>
                <img src={treaturself} alt="treaturself" className="p-0 w-80 h-auto"/>
            </Grid>
            <Grid item xs={10} md={4} className='text-sm sm:text-base'>
                <h3>We are Little Viet, a small bubble tea shop located at 104-2565 Portage Ave with a wide variety of drinks and desserts.
                    We are excited to serve you our delicious and refreshing drinks, and thankful for all the feedback.
                    <br /><br />
                    With wide variety of drinks
                    and easy customization from flavor adjustment, hot & cold, size to sugar level and topping, Little Viet is confident to give
                    you the drink that both cheer you up and fulfill your craving.
                    <br /><br />
                    Bring your friends and love ones to Little Viet. They are sure to thank you for bringing them.
                </h3>
            </Grid>
            <Grid item xs={4} md={1} className='' />
        </Grid>

        <Grid container rowSpacing={0.3} columnSpacing={0.3} justifyContent="center" alignItems="center">
            <img src={slogan} alt="slogan" className="p-0 w-6/12 sm:w-3/12 h-auto" />
        </Grid>
    </>
    );
}
//#endregion


