import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return(
    <div className={styles.Nav__container}>
      <div className={styles.Nav__side}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>MOVIEWEB</h1>
        </Link>
        <Link to="/SingIn" style={{ textDecoration: 'none' }}>
          <h3>SIGN IN</h3>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;

