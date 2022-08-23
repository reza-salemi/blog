import styles from './search-box.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBox = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} size="lg"/>
      <input className={styles['search-box']} type="search" placeholder="Search" />
    </div>
  )
}

export default SearchBox;