import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from '@material-ui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Footer() {
    return (
        <div className='h-auto bg-black'>
            <>
                <Grid container className='justify-items-center text-white text-xs sm:text-base' rowSpacing={2} columnSpacing={2} alignItems="center">
                    <Grid item xs={12} md={4} className='spacer'/>
                    <Grid item xs={12} md={4} className='spacer text-center'>
                        <p className='text-xs sm:text-base font-semibold'>CONTACT US:</p>
                        <p className='text-xs sm:text-base'>{<LocationOnIcon/>} 2565 Portage Ave #104, Winnipeg, MB R3J 0P4</p>
                        <p className='text-xs sm:text-base'>{<LocalPhoneIcon/>} Phone Number: <Link href="tel:2043063979">(204) 306-3979</Link></p>
                        <p className='text-xs sm:text-base'>{<CalendarTodayIcon/>} Monday to Thursday: 12am - 10am and Friday to Sunday: 11am - 10am</p>
                    </Grid>
                    <Grid item xs={12} md={4} className='spacer'/>
                    <Grid item xs={2} md={3} className='spacer'/>
                    <Grid item xs={8} md={6} className='spacer'><div className='h-0.5 bg-white'></div></Grid>
                    <Grid item xs={2} md={3} className='spacer'/>
                    <Grid item xs={12} md={12} className='spacer text-center text-xs sm:text-sm'>
                        <p>Developed by <Link href="https://quocvinguyen.com/">Jarvis Nguyen</Link></p>
                        <br/>
                    </Grid>
                </Grid>
            </>
        </div>
    );  
}

export default Footer;