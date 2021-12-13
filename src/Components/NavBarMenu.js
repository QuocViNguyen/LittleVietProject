import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import * as React from 'react';

function NavBarMenu() 
{
    const currentTab = () =>
    {
        let path = window.location.pathname;
        if (path === "/") return 0;
        else if (path === "/menu") return 1;
        else if (path === "/merchandise") return 2;
        else if (path === "/order") return 3;
    };  

    const [value, setValue] = React.useState(currentTab);

    const handleChange = (event, newValue) => 
    {
        setValue(newValue);
    };

    let navigate = useNavigate();
    
    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                <Tab className='menu_tab' icon={<HomeIcon />} label="HOME" onClick={() =>
                {
                    navigate("/");
                }} />
                <Tab className='menu_tab' icon={<FastfoodIcon />} label="DRINK" onClick={() =>
                {
                    navigate("/menu");
                }} />
                <Tab className='menu_tab' icon={<StoreIcon />} label="MERCHANDISE" onClick={() =>
                {
                    navigate("/merchandise");
                }}/>
                <Tab className='menu_tab' icon={<ShoppingCartIcon />} label="ORDER" />
            </Tabs>
        </>
    );
}

export default NavBarMenu;