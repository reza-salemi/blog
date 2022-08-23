import styles from './button.module.scss';
const Button = ({children,...props}) => <button className={styles.container} {...props}>{children}</button>

export default Button;