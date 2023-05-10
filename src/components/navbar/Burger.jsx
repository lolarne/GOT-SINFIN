import { useState } from 'react';
import './burger.scss';
import Popnav from './Popnav.jsx';

/**
 * Summary - Burger component handle the responsive version of the navigation bar
 * This component is called in Navbar.jsx component
 * @argument Popnav - This Popnav component handle the navigation links with the responsive version too
 * @returns 
 */

const Burger = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div onClick={() => setOpen(!open)} className={`burgerMainDiv ${open ? 'open' : 'close'}`}>
                <div />
                <div />
                <div />
            </div>
            <Popnav open={open} setOpen={setOpen}/>
        </>
    )
}

export default Burger;