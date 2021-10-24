//#region import
import * as React from 'react';
import { Box, Button } from '@material-ui/core';
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
import logo from '../Media/logo_tran.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from '@mui/material/Divider';
import treaturself from '../Media/treaturself.jpg';
import slogan from '../Media/slogan.png';
//#endregion

function Home() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='overflow-x-hidden'>
            <div className='h-screen w-screen flex-col justify-center bg-gradient-to-r from-yellow-200 via-pink-100 to-yellow-100'>
                {NavBar(value, handleChange)}
                <div className=" flex justify-center my-12">
                    <Box className='w-10/12 sm:w-4/12 h-auto'>
                        {InstagramStyledImgGroup()}
                    </Box>
                </div>
            </div>
            <div className='flex-col justify-center bg-gray-100'>
                {AboutUsContent()}
            </div>
            <div className='block h-52 justify-center bg-black'>
                <>
                    <div className=''>
                        
                    </div>
                </>
            </div>
        </div>
    );
}
export default Home;


//#region components
function AboutUsContent() {
    return (
    <>
        <br /><br />
        <Grid container rowSpacing={0.3} columnSpacing={0.3} justifyContent="center" alignItems="center">
            <Grid item xs={4} md={1} className='' />
            <Grid item xs={4} md={10} className='text-center'>
                <h3 className='text-3xl font-semibold'>WELCOME TO LITTLE VIET</h3>
                <br />
                <Divider />
            </Grid>
            <Grid item xs={4} md={1} className='' />
        </Grid>
        <br /><br /><br />
        <Grid container rowSpacing={0.3} columnSpacing={0.3} justifyContent="center" alignItems="center">
            <Grid item xs={4} md={1} className='' />
            <Grid item xs={4} md={4} className='text-center'>
                <img src={treaturself} className='p-0' alt="treaturself" className="w-80 h-auto" />
            </Grid>
            <Grid item xs={4} md={4} className=''>
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
            <img src={slogan} className='p-0' alt="slogan" className="w-3/12 h-auto" />
        </Grid>
    </>
    );
}

function NavBar(value, handleChange) {
    return(
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
        <Grid item xs={4} md={1} className='spacer'/>
    </Grid>);
}

function NavBarMenu(value, handleChange) {
    return <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<HomeIcon />} label="HOME" />
        <Tab icon={<FastfoodIcon />} label="DRINK" />
        <Tab icon={<StoreIcon />} label="MERCHANDISE" />
        <Tab icon={<ShoppingCartIcon />} label="ORDER" />
    </Tabs>;
}

function InstagramStyledImgGroup() {
    return <Grid container rowSpacing={0.3} columnSpacing={0.3} justifyContent="center" alignItems="center">
        <Grid item xs={4} md={4} className=''>
            <img src={p1} className='p-0' alt="p1" />
        </Grid>
        <Grid item xs={4} md={4}>
            <img src={p4} className='p-0' alt="p4" />
        </Grid>
        <Grid item xs={4} md={4}>
            <img src={p7} className='p-0' alt="p7" />
        </Grid>
        <Grid item xs={4} md={4}>
            <img src={p2} className='p-0' alt="p2" />
        </Grid>
        <Grid item xs={4} md={4}>
            <img src={p5} className='p-0' alt="p5" />
        </Grid>
        <Grid item xs={4} md={4}>
            <img src={p8} className='p-0' alt="p8" />
        </Grid>
        <Grid item xs={4} md={4}>
            <img src={p3} className='p-0' alt="p3" />
        </Grid>
        <Grid item xs={4} md={4}>
            <img src={p6} className='p-0' alt="p6" />
        </Grid>
        <Grid item xs={4} md={4}>
            <img src={p9} className='p-0' alt="p9" />
        </Grid>
    </Grid>;
}
//#endregion


