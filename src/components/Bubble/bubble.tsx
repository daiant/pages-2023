import styles from './bubble.module.scss';

export default function Bubble(props: {title: string, img?: string}) {
    function getStyles(): { backgroundImage?: string } {
        if(!props.img) return {}; 
        return {backgroundImage: 'url(' + props.img +')'};
    }
    return <>
        <div className={styles.bubble} style={getStyles()}>
            {!props.img && <span className={styles.title}>{props.title}</span>}  
        </div>
    </>
}