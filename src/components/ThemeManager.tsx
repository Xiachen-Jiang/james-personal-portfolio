import { useEffect, useState } from 'react';

interface ThemeManagerProps {
    children: React.ReactNode;
}

export function ThemeManager({ children }: ThemeManagerProps) {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

    // check current time is in the day time range (6:00 AM - 6:00 PM)
    const isDayTime = () => {
        const now = new Date();
        const hour = now.getHours();
        return hour >= 6 && hour < 18;
    };

    // set theme based on time
    const setThemeBasedOnTime = () => {
        const shouldBeLight = isDayTime();
        const newTheme = shouldBeLight ? 'light' : 'dark';
        
        if (newTheme !== currentTheme) {
            setCurrentTheme(newTheme);
            document.body.className = `${newTheme}-theme`;
            
            // save to localStorage
            localStorage.setItem('theme', newTheme);
        }
    };

    // manually switch theme
    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setCurrentTheme(newTheme);
        document.body.className = `${newTheme}-theme`;
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        // initialize theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setCurrentTheme(savedTheme as 'light' | 'dark');
            document.body.className = `${savedTheme}-theme`;
        } else {
            // if no saved theme, set theme based on time
            setThemeBasedOnTime();
        }

        // check time every minute
        const interval = setInterval(setThemeBasedOnTime, 60000);

        // listen to storage change (if user switch theme in other tab)
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'theme' && e.newValue) {
                const newTheme = e.newValue as 'light' | 'dark';
                setCurrentTheme(newTheme);
                document.body.className = `${newTheme}-theme`;
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            clearInterval(interval);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [currentTheme]);

    // expose toggleTheme to global use
    useEffect(() => {
        (window as any).toggleTheme = toggleTheme;
        return () => {
            delete (window as any).toggleTheme;
        };
    }, [currentTheme]);

    return <>{children}</>;
} 