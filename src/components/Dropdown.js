import React, { useState, useRef, useEffect } from "react";
import "./dropdown.scss";
import { navItems } from "./navItems"; 
import { BiCheck } from "react-icons/bi";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null); 
  const [cursor, setCursor] = useState(0); 
  const [visibleItems, setVisibleItems] = useState([]); 
  const menuRef = useRef();

  useEffect(() => {
    
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newVisibleItems;

      if (screenWidth < 1008) {
        newVisibleItems = navItems.slice(1, navItems.length);
      }  else if (screenWidth < 1200) {
        newVisibleItems = navItems.slice(2, navItems.length);
      
      }else if (screenWidth < 1400) {
        newVisibleItems = navItems.slice(4, navItems.length);
      }else if (screenWidth < 768) {
        newVisibleItems = !navItems;
      }
      else {
       
        newVisibleItems = navItems.slice(7, navItems.length);
      }

     


      setVisibleItems(newVisibleItems);
    };

   
    handleResize();
    window.addEventListener("resize", handleResize);

    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
    } else if (e.keyCode === 40 && cursor < navItems.length - 1) {
      setCursor(cursor + 1);
    } else if (e.keyCode === 13) {
      const optionValue = navItems[cursor].label; 
      setSelected(optionValue);
      setOpen(false);
    }
  };
  
  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-wrapper" ref={menuRef}>
          <div className="dropdown-container">
            <div
              className="dropdown-header"
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              tabIndex="0"
            >
              <div className="dropdown-title">
                {selected ? "MORE" : "MORE"} 
                {/* you can also add selected items name for different pages */}
              </div>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          {open && (
            <ul className="list">
              {/* Map over visible items only */}
              {visibleItems.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSelected(item.label);
                    setOpen(false);
                  }}
                  className={cursor === i ? "activeList" : "list-item"}
                >
                  {item.label}
                  {cursor === i && <BiCheck className="check-button"/>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;