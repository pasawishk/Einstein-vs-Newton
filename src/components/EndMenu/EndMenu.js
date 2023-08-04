import styles from './styles.module.css';

const EndMenu = ({ winner, onStartClick }) => {
  return (
    <div className={styles.main}>
      <h1>{winner.name} has won!</h1>
      <button className={styles.startButton} onClick={onStartClick}>
        Play Again
      </button>
    </div>
  );
};

export default EndMenu;