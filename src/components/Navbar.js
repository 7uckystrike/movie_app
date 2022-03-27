import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return(
    <div className={styles.Nav__container}>
      <div className={styles.Nav__side}>
        <Link to="/" className={styles.MovieWeb}>
          <h1>MOVIEWEB</h1>
        </Link>
        <Link to="/SingIn" className={styles.SingIn}>
          <h3>SIGN IN</h3>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;

