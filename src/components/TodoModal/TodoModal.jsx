import styles from './TodoModal.module.scss';

function TodoModal() {
  return (
    <div className={styles.todoModalPage}>
      <div className={styles.todoModal}>
        <div className={styles.todoInput}>
          <input type='text' placeholder='a d d   d i d i t o' />
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default TodoModal;
