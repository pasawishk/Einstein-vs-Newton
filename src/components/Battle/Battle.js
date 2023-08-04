import { useState } from 'react';
import { PlayerSummary } from '../PlayerSummary/PlayerSummary.js';
import styles from './styles.module.css';
import { opponentStats } from 'shared/characters.js';
import { playerStats } from 'shared/characters.js';
import { BattleMenu } from 'components/BattleMenu/BattleMenu.js';


export const Battle = () => {

    const[opponentHealth,setOpponentHealth] = useState(opponentStats.maxHealth);
    const[playerHealth,setPlayerHealth] = useState(playerStats.maxHealth);
    return (
    <div className={styles.main}>
        <div className={styles.oponent}>
           <div className={styles.summary}>
            <PlayerSummary
            health = {opponentHealth}
            name={opponentStats.name}
            level={opponentStats.level}
            maxHealth={opponentStats.maxHealth}
            />
            </div>
        </div>
        <div className={styles.user}>
            <div className={styles.summary}>
            <PlayerSummary 
            main
            health = {playerHealth}
            name={playerStats.name}
            level={playerStats.level}
            maxHealth={playerStats.maxHealth}
            />
            </div>
        </div>
        <div className={styles.hudChild}>
            <BattleMenu
            onAttack={() => console.log('Attack!')}
            onMagic ={() => console.log('Magic')}
            onHeal ={() => console.log('heal')}/>
        </div>
    </div>
    );
};