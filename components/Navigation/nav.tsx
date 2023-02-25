import { routing } from '@/lib/menu.routing';
import { useEffect, useState } from 'react';
import styles from './nav.module.scss';

export default function Nav() {
    const [dropDown, setDropDown] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [position, setPosition] = useState(0);
    const [clientY, setClientY] = useState(0);
    const [opacity, setOpacity] = useState(0);
    let SNAP_THRESHOLD = 0;
    const MAX_OPACITY = 0.7;
    useEffect(() => {
        setPosition(window.innerHeight)
        SNAP_THRESHOLD = getDropDownHeight() / 2;
    }, [])
    function getSection(): string {
        return 'a CSS magician';
    }

    function getDropDownHeight(): number {
        const dropDownElement = document?.querySelector('.' + styles.dropDownMenu);
        if (!dropDownElement) return window?.innerHeight;
        return Number(getComputedStyle(dropDownElement!).height.replace('px', ''));

    }

    function showDropDown() { handleDropDown(true); setOpacity(MAX_OPACITY); }
    function hideDropDown() { handleDropDown(false); setOpacity(0) }
    function handleDropDown(show: boolean) {
        setAnimation(true);
        setTimeout(() => setAnimation(false), 400)
        if (show) {
            document.body.classList.add('noscroll');
            setPosition(window.innerHeight - getDropDownHeight());
        }

        else {
            setPosition(window.innerHeight * 1.2);
            document.body.classList.remove('noscroll');
        }
        setDropDown(show);
    }
    function initClientY(event: React.TouchEvent<HTMLDivElement>) {
        setClientY(event.touches[0].clientY);
    }
    function handleMovement(event: React.TouchEvent<HTMLDivElement>) {
        // Smooth behavior
        const offsetY = getDropDownHeight() - (clientY - event.touches[0].clientY)
        const maxHeight = Math.min(offsetY, getDropDownHeight());
        const position = window.innerHeight - maxHeight;
        updateOpacity(maxHeight);
        setPosition(position);

        event.stopPropagation();
    }

    function snapPosition() {
        if ((window.innerHeight - position) < SNAP_THRESHOLD) { hideDropDown(); }
        else { showDropDown(); }
    }

    function updateOpacity(position: number): void {
        const percentage = position / getDropDownHeight();
        setOpacity(percentage * MAX_OPACITY);
    }
    function handleCat(event: React.MouseEvent<HTMLOrSVGElement>) {
        alert('ow!');
        event.stopPropagation();
    }
    return (
        <nav className={styles.nav}>
            <p className={styles.title}>Carlos is</p>
            <p className={styles.section} onClick={showDropDown}>{getSection()}</p>
            <section className={`${styles.dropDownMenu} ${dropDown ? styles.show : ''} ${animation ? styles.animation : ""}`} style={{ bottom: position + 'px' }}>
                <ul>
                    {routing.map((route: string) => {
                        return <li key={route}>{route}</li>
                    })}
                </ul>
                <div className={styles.separator} onClick={hideDropDown} onTouchStart={initClientY} onTouchMove={handleMovement} onTouchEnd={snapPosition}>
                    <div className="bar"></div>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleCat}>
                        <use href='#cat'></use>
                    </svg>
                </div>
            </section>
            <div className={`${styles.mask} ${dropDown ? styles.show : ''}`} style={{ opacity: opacity }} onClick={hideDropDown}></div>
        </nav>

    )
}