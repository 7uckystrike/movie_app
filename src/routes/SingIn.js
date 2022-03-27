import styles from './SingIn.module.css'

function SingIn () {
  return(
    <div className={styles.div}>
      <form className={styles.form}>
        <h1 className={styles.title}>SIGN IN</h1>
        <div className={styles.about}>
          <input type="email" placeholder="Email" required className={styles.email} />
          <input type="password" placeholder="Password" required className={styles.password} />
          <input type="submit" value="Sign In" className={styles.submit} />
        </div>

      </form>
    </div>
  )
}

export default SingIn;