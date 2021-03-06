import React, {useState} from "react";
import Navigation from "../Navigation";

function Burger() {
    const [open, setOpen] = useState(false);

    const toggleClass = () => {
        setOpen(!open);
    };

    const handleOnClick = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={"burgerWrapper"}>
                <div className={!open ? "burger" : "burger burgerOpen"} onClick={toggleClass}>
                    <div style={{
                        backgroundColor: `${(open) ? '#ccc' : '#3C3C3C'}`,
                        transform: `${(open) ? 'rotate(45deg)' : 'rotate(0)'}`
                    }}/>
                    <div style={{
                        backgroundColor: `${(open) ? '#ccc' : '#3C3C3C'}`,
                        transform: `${(open) ? 'translateX(-100%)' : 'translateX(0)'}`,
                        opacity: `${(open) ? '0' : '1'}`
                    }}/>
                    <div style={{
                        backgroundColor: `${(open) ? '#ccc' : '#3C3C3C'}`,
                        transform: `${(open) ? 'rotate(-45deg)' : 'rotate(0)'}`
                    }}/>
                </div>
                <Navigation open={open} onClick={handleOnClick}/>
            </div>
        </>
    )
}

export default Burger;