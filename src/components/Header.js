import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { navItems } from './navItems';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import Dropdown from "./Dropdown";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [maxItems, setMaxItems] = useState(7); 
    const [visibleItems, setVisibleItems] = useState(navItems.slice(0, maxItems)); 
   
    useEffect(() => {
       
        const handleResize = () => {
            const screenWidth = window.innerWidth;
        
            let newMaxItems;
        
            if (screenWidth < 1008) {
                newMaxItems = 1;
            } else if (screenWidth < 1200) {
                newMaxItems = 2;
            }else if (screenWidth < 1400) {
                newMaxItems = 4;
            }
             else {
                newMaxItems = 7;
            }
        
          
            if (newMaxItems !== maxItems) {
                setMaxItems(newMaxItems);
                setVisibleItems(navItems.slice(0, newMaxItems));
               
            }
        };
        

       
        window.addEventListener("resize", handleResize);
        
       
        handleResize();

      
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [maxItems]);

    const menuToggler = () => setMenuOpen((p) => !p);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div>
                    <img style={{marginInline:"1%", paddingTop:"1%", paddingLeft:"4%", marginRight:"2%"}} src="./LOGO.png" alt="logo"/>
                    <span className={styles.logo}>E-COMM</span>
                </div>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : ''}`}>
                        {visibleItems.map((item, index) => (
                            <a key={index} className={styles.nav__item} href={item.link}>
                                {item.label}
                            </a>
                        ))}
                      
                            <div className={styles.nav__item}>
                                <Dropdown />
                                <BiChevronDown />
                            </div>
                        
                    </nav>
                </div>
                <div>
                    <div className={styles.header__button__container}>
                        <Button />
                    </div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                </div>
            </div>
        </div>
    );
};

const Button = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Search text:', text);
        setText('');
    };

    return (
        <form className="search" onSubmit={handleSubmit}>
            <BiSearchAlt2 />
            <input
                className={styles.button}
                type="text"
                placeholder="Search something"
                value={text}
                onChange={handleChange}
            />
        </form>
    );
};

export default Header;
