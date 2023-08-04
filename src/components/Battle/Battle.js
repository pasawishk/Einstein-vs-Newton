import { useState } from 'react';
import { PlayerSummary } from '../PlayerSummary/PlayerSummary.js';
import styles from './styles.module.css';
import { opponentStats } from 'shared/characters.js';
import { playerStats } from 'shared/characters.js';
import { BattleMenu } from 'components/BattleMenu/BattleMenu.js';
import { BattleAnnouncer } from 'components/BattleAnnouncer/BattleAnnouncer.js';


export const Battle = () => {

    const[opponentHealth,setOpponentHealth] = useState(opponentStats.maxHealth);
    const[playerHealth,setPlayerHealth] = useState(playerStats.maxHealth);
    const[announcerMessage,setAnnouncerMessage] = useState('');
    return (
    <>
        <div className={styles.opponent}>
           <div className={styles.summary}>
            <PlayerSummary
            health = {opponentHealth}
            name={opponentStats.name}
            level={opponentStats.level}
            maxHealth={opponentStats.maxHealth}
            />
            </div>
        </div>

        <div className={styles.characters}>
            <div className={styles.gameHeader}>
                {playerStats.name} vs {opponentStats.name}
            </div>
        </div>
        <div className={styles.gameImages}>
          <div className={styles.playerSprite}>
            <img
              alt={playerStats.name}
              src={playerStats.img}
              
            />
          </div>
          <div className={styles.opponentSprite}>
            <img
              alt={opponentStats.name}
              src={opponentStats.img}
              
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
            
            <div className={styles.hud}>

                <div className={styles.hudChild}>
                    <BattleAnnouncer
                    message={ announcerMessage || `What will ${playerStats.name} do?`}/>
                </div>
            <div className={styles.hudChild}>
            <BattleMenu
            onAttack={() => console.log('Attack!')}
            onMagic ={() => console.log('Magic')}
            onHeal ={() => console.log('heal')}/>
            </div>
        
        </div>
        </div>
    </>
    );
};