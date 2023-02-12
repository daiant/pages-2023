import { useState, useEffect } from 'react';
import styles from './themeSwitcher.module.scss';

export default function ThemeSwitcher(props: {className: string, onThemeChange: Function}) {
    const [darkTheme, setDarkTheme] = useState(false);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    useEffect(() => {
        setDarkTheme(prefersDark);
    }, [])

    function handleThemeChange() {
        // TODO: Transition on background gucci
        const root = document.querySelector(':root');
        if (!root) return;

        if (!darkTheme) {
            // Switch to dark
            const color = getComputedStyle(root).getPropertyValue('--color-dark');
            const background = getComputedStyle(root).getPropertyValue('--background-dark');
            const cover = getComputedStyle(root).getPropertyValue('--cover-dark');
            (root as HTMLElement).style.setProperty('--main-color', color);
            (root as HTMLElement).style.setProperty('--main-bg', background);
            (root as HTMLElement).style.setProperty('--cover', cover);
        } else {
            // Switch to light
            const color = getComputedStyle(root).getPropertyValue('--color-light');
            const background = getComputedStyle(root).getPropertyValue('--background-light');
            const cover = getComputedStyle(root).getPropertyValue('--cover-light');
            (root as HTMLElement).style.setProperty('--main-color', color);
            (root as HTMLElement).style.setProperty('--main-bg', background);
            (root as HTMLElement).style.setProperty('--cover', cover);
        }
        props.onThemeChange(!darkTheme);
        setDarkTheme(!darkTheme);

    }
    return <>
        <div className={`${styles.themeChanger} ${props.className}`} onClick={handleThemeChange}>
            <img src={darkTheme ? '/sun.svg' : '/moon.svg'} />
        </div>
    </>
}