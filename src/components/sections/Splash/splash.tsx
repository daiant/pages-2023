import { useEffect, useState } from 'react';
import styles from './splash.module.scss';

export default function Splash() {
    const [darkTheme, setDarkTheme] = useState(false);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    useEffect(() => {
        setDarkTheme(prefersDark);
    }, [])
    function handleThemeChange() {
        const root = document.querySelector(':root');
        if (!root) return;

        if(!darkTheme) {
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
        setDarkTheme(!darkTheme);

    }
    return <>
        <section id='splash' className={styles.main}>
            <div className={styles.themeChanger} onClick={handleThemeChange}>
                <img src={darkTheme ? '/sun.svg' : '/moon.svg'} />
            </div>
            <div className={styles.title}>
                <h1>Carlos</h1>
                <h2>Frontend developer</h2>
                <h3>CSS magician</h3>
            </div>
            <div className={styles.separator}>
                <div className={styles.monstera}>
                    <img src="/monstera.svg" />
                </div>
                <div className={styles.line}></div>
                <div className={styles.monstera}>
                    <img src="/monstera-2.svg" />
                </div>
            </div>
            <div className={styles.scrollDown}>
                <h3>See my</h3>
                <img src="/scroll.png" title='scroll down'
                style={{filter: darkTheme ? 'invert(1)' : ''}} />
                <h3>work</h3>
            </div>
        </section>
    </>
}