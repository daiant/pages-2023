import styles from './splash.module.scss';

export default function Splash() {
    return <>
        <section id='splash' className={styles.main}>
            {/* <div className={styles.themeChanger}>
                <button>Dame anda</button>
            </div> */}
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
                <img src="/scroll.png" title='scroll down' />
                <h3>work</h3>
            </div>
        </section>
    </>
}