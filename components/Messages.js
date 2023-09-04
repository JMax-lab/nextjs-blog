import styles from './messages.module.css';
import { clsx } from 'clsx';

export  function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
        [styles.tip]: type === 'tip',
      })}
    >
      {children}
    </div>
  );
}