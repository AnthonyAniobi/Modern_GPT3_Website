import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
// BEM -> block element modifier



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const closeMenuContainer = () => setToggleMenu(false);
    const Menu = () => (
        <>
            <p><a href='#home' onClick={closeMenuContainer}>Home</a></p>
            <p><a href='#wgpt3' onClick={closeMenuContainer}>what is GPT3</a></p>
            <p><a href='#possibility' onClick={closeMenuContainer}>Open AI</a></p>
            <p><a href='#features' onClick={closeMenuContainer}>Case Studies</a></p>
            <p><a href='#blog' onClick={closeMenuContainer}>Library</a></p>
        </>
    )
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt='logo image' />
                </div>
                <div className='gpt3__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='gpt3__navbar-menu'>
                {
                    toggleMenu ?
                        <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> :
                        <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className='gpt3__navbar-menu_container scale-up-center'>
                            <div className="gpt3__navbar-menu_container-links">
                                <Menu />
                                <div className='gpt3__navbar-menu_container-links-sign '>
                                    <p>Sign in</p>
                                    <button type='button'>Sign up</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar