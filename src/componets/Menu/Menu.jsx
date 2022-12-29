import React, { useState } from 'react'
import './menu.css'

function Menu() {
    const [open, setopen] = useState(false);

    const toggleMenu = () => {
        if (open === false) {
            setopen(true)
        }
        else {
            setopen(false)
        }
    }

    return (
        <>

            <div className="menu">
                <div className={`${open ? 'menubar' : 'menu-dismiss'}`}>
                    <div className={`${open ? 'menuitems' : 'menu-dismiss'}`}>
                        <li>Home</li>
                        <li>Rules and guidelines</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>

                    </div>

                    <div className={`${open ? 'links' : 'menu-dismiss'}`}>
                        <i class="fa-brands fa-facebook-f fa"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <p className={`${open ? 'line' : ''}1 line`}></p>
                    <p className={`${open ? 'line' : ''}2 line`}></p>
                    <p className={`${open ? 'line' : ''}3 line`}></p>
                </div>
            </div>


        </>
    )
}

export default Menu