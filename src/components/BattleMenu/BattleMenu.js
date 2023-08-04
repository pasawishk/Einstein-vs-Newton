import styles from './styles.module.css';

export const BattleMenu = ({ onAttack, onMagic, onHeal }) => (
  <div className={styles.main}>
    <div onClick={onAttack} className={styles.option}>
      Calculus attack
    </div>
    <div onClick={onMagic} className={styles.option}>
      Quantum magic
    </div>
    <div onClick={onHeal} className={styles.option}>
      Relativity heal
    </div>
  </div>
);