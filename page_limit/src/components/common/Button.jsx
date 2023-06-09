import styles from "./Button.module.css";

function Button({ disabled, children, onClick }) {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      data-testid="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;