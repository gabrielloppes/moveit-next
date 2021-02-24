import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.ProfileContainer}>
      <img src="https://github.com/gabrielloppes.png" alt="Gabriel Lopes" />
      <div>
        <strong>Gabriel Lopes</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}
