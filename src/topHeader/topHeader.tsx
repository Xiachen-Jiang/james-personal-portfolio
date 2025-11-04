import { useState, useEffect } from "react";
import "./topheader.scss";
import { Link, useLocation } from "react-router-dom";

export function TopHeader() {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(1); // Select Home by default
    // const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

    const topHeaderMenu: any = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "Portfolio",
            link: "/portfolio"
        },
        // {
        //     id: 3,
        //     name: "About Me",
        //     link: "/about"
        // }
    ]

    // sync active menu with location
    useEffect(() => {
        const active = topHeaderMenu.find((m: any) => m.link === location.pathname)?.id || 1;
        setActiveMenu(active);
    }, [location.pathname]);

    // listen to theme change
    // useEffect(() => {
    //     const checkTheme = () => {
    //         const isDark = document.body.classList.contains('dark-theme');
    //         setIsDarkMode(isDark);
    //     };

    //     // initial check
    //     checkTheme();

    //     // listen to body class change
    //     const observer = new MutationObserver(checkTheme);
    //     observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    //     return () => observer.disconnect();
    // }, []);

    const handleMenuClick = (id: number) => {
        setActiveMenu(id);
        setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
    }

    // const toggleTheme = () => {
    //     // use global toggleTheme function
    //     if ((window as any).toggleTheme) {
    //         (window as any).toggleTheme();
    //     }
    // }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <nav className="top-header dark">
        {/* <nav className={`top-header ${isDarkMode ? 'dark' : 'light'}`}> */}
            <div className="top-header-container">
                <div className="top-header-logo">
                    <Link to="/" onClick={() => handleMenuClick(1)}>James</Link>
                </div>
                
                {/* Desktop Menu */}
                <div className="top-header-menu desktop-menu">
                    {topHeaderMenu.map((item: any) => (
                        <Link 
                            to={item.link}
                            key={item.id}
                            className={activeMenu === item.id ? 'active' : ''}
                            onClick={() => handleMenuClick(item.id)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    {/* <div className="theme-switch" onClick={toggleTheme}>
                        <div className={`switch-container ${isDarkMode ? 'dark' : 'light'}`}>
                            <div className="switch-icon">
                                {isDarkMode ? '🌙' : '☀️'}
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* Mobile Menu Controls */}
                <div className="mobile-controls">
                    {/* <div className="theme-switch mobile-theme-switch" onClick={toggleTheme}>
                        <div className={`switch-container ${isDarkMode ? 'dark' : 'light'}`}>
                            <div className="switch-icon">
                                {isDarkMode ? '🌙' : '☀️'}
                            </div>
                        </div>
                    </div> */}
                    <div className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    {topHeaderMenu.map((item: any) => (
                        <Link 
                            to={item.link}
                            key={item.id}
                            className={activeMenu === item.id ? 'active' : ''}
                            onClick={() => handleMenuClick(item.id)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
} 