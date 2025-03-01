import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../Css/nav.css'

function Nav() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <>
            <nav>
                <h3><i className="ri-book-shelf-fill"></i>Literary Lounge</h3>
                <div className={`menu ${menuOpen ? 'slidemenu' : ''}`}>
                    <i
                        id="mnuclose"
                        className={`ri-arrow-right-line ${menuOpen ? '' : 'rotate180'}`}
                        onClick={toggleMenu}
                    ></i>
                    <Link className="options" to={'/'} onClick={closeMenu}>
                        Home
                    </Link>
                    <Link className="options" to={'/browsebooks'} onClick={closeMenu}>
                        Brows Books
                    </Link>
                    <Link className="options" to={'/addbook'} onClick={closeMenu}>
                        Add books
                    </Link>
                    
                </div>

                <i id="mnubtn" className="ri-menu-line" onClick={toggleMenu}></i>

            </nav>


        </>
    );
}

export default Nav;
