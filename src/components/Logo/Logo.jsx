import styles from './Logo.module.scss';

function Logo() {
  return (
    <div className={styles.todoModalPage}>
      <div className={styles.todoModal}>
        <div className={styles.box1}></div>
        <div className={styles.box2}></div>
        <div className={styles.box3}></div>
      </div>
    </div>
  );
}

export default Logo;
