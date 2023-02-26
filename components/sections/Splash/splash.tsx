'use client'

import ThemeSwitcher from '@/components/ThemeSwitcher/themeSwitcher';
import { useEffect, useState } from 'react';
import styles from './splash.module.scss';

export default function Splash() {
    const [darkTheme, setDarkTheme] = useState(false);
    useEffect(() => {
        setDarkTheme(window?.matchMedia('(prefers-color-scheme: dark)').matches);
    }, [])
    function handleTheme(isDark: boolean): void {
        setDarkTheme(isDark);
    }
    function scrollNext(): void {
        const next = document.querySelector('#scroll-next');
        next?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return <>
        <section id='splash' className={styles.main}>
            <ThemeSwitcher className={styles.themeChanger} onThemeChange={handleTheme} />
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
            <div className={styles.scrollDown} onClick={scrollNext}>
                <h3>See my</h3>
                <img src="/scroll.png" title='scroll down'
                // TODO: INVESTIGAR ERROR DE CONSOLA
                // style={{ filter: darkTheme ? 'invert(1)' : '' }}
                />
                <h3>work</h3>
            </div>
        </section>
    </>
}