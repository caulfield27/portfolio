import MyContacts from "@/shared/myContacts/MyContacts"
import styles from './page.module.css'
import LinkButton from "@/shared/linkButton/linkButton"

export default function Home() {
  return (
    <>
      <div className={styles.home_container}>
        <section className={styles.left_section}>
          <img className={styles.vector} src="/Vector.png" alt="vector" />
          <div className={styles.left_text}>
            <p>MY NAME<br />IS <b>SALIKHOV ALISHER...</b></p>
            <h3>Front-end developer</h3>
          </div>
          <LinkButton label="Let's talk with me" link="https://t.me/salikhov1337" isLoad={false} />
          <div className={styles.contacts_wrap}>
            <MyContacts icon="/phone.svg" contact="+992 005 88 02 85" />
            <MyContacts icon="/email.svg" contact="al1onggwp@gmail.com" />
          </div>
        </section>
        <section className={styles.right_section}>
          <img src="/dude.png" alt="dude" />

        </section>
      </div>

    </>
  )
}
