import styles from './top-navbar.module.scss';
import SearchBox from "../../../components/search-box/search-box.jsx";
import Button from "../../../components/button/button.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => {
  const addIcon = <FontAwesomeIcon icon={faCirclePlus} />;
  const handleClick = () => {
    console.log('Add Post');
  }

  return (
  <header className={styles.container}>
    <SearchBox/>
    <Button onClick={handleClick}>Add new post{addIcon}</Button>
  </header>
  );
};

export default TopNavbar;