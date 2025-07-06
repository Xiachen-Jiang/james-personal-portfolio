import React, { useState, useEffect } from "react";
import "./topheader.scss";

export function TopHeader() {
    const [activeMenu, setActiveMenu] = useState(1); // Select Home by default
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

    const topHeaderMenu: any = [
        {
            id: 1,
            name: "Home",
            link: "#home"
        },
        {
            id: 2,
            name: "About",
            link: "#about"
        },
        {
            id: 3,
            name: "Skills",
            link: "#skills"
        },
        {
            id: 4,
            name: "Projects",
            link: "#projects"
        },
        {
            id: 5,
            name: "Contact",
            link: "#contact"
        }
    ]

    // listen to theme change
    useEffect(() => {
        const checkTheme = () => {
            const isDark = document.body.classList.contains('dark-theme');
            setIsDarkMode(isDark);
        };

        // initial check
        checkTheme();

        // listen to body class change
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    const handleMenuClick = (id: number, link: string, event: React.MouseEvent) => {
        event.preventDefault(); // Prevent default jump
        setActiveMenu(id);
        setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
        
        // Smooth scroll to target section
        const targetElement = document.querySelector(link) as HTMLElement;
        if (targetElement) {
            const headerHeight = 70; // Height of fixed header
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    const toggleTheme = () => {
        // use global toggleTheme function
        if ((window as any).toggleTheme) {
            (window as any).toggleTheme();
        }
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <nav className={`top-header ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="top-header-container">
                <div className="top-header-logo">
                    <a href="#home" onClick={(e) => handleMenuClick(1, "#home", e)}>James</a>
                </div>
                
                {/* Desktop Menu */}
                <div className="top-header-menu desktop-menu">
                    {topHeaderMenu.map((item: any) => (
                        <a 
                            href={item.link} 
                            key={item.id}
                            className={activeMenu === item.id ? 'active' : ''}
                            onClick={(e) => handleMenuClick(item.id, item.link, e)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="theme-switch" onClick={toggleTheme}>
                        <div className={`switch-container ${isDarkMode ? 'dark' : 'light'}`}>
                            <div className="switch-icon">
                                {isDarkMode ? '🌙' : '☀️'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Controls */}
                <div className="mobile-controls">
                    <div className="theme-switch mobile-theme-switch" onClick={toggleTheme}>
                        <div className={`switch-container ${isDarkMode ? 'dark' : 'light'}`}>
                            <div className="switch-icon">
                                {isDarkMode ? '🌙' : '☀️'}
                            </div>
                        </div>
                    </div>
                    <div className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    {topHeaderMenu.map((item: any) => (
                        <a 
                            href={item.link} 
                            key={item.id}
                            className={activeMenu === item.id ? 'active' : ''}
                            onClick={(e) => handleMenuClick(item.id, item.link, e)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
} 