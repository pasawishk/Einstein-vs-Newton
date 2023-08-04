import styles from './styles.module.css';
import {Bar} from '../Bar/Bar.js';

const black = "black";

export const PlayerSummary = ({main = false,
    name,
    iq,
    level,
    health,
    maxHealth}) => {
    return (
    <div 
    style={{backgroundColor: main? black:black}} className={styles.main}>
        <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.level}>IQ:{iq}</div>
        </div>
            <div className={styles.health}>
                <Bar label="Hp" value={health} maxValue={maxHealth}/>
            </div>
        </div>
    );
};
