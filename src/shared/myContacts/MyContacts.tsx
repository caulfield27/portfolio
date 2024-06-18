import styles from './MyContacts.module.css'

const MyContacts = ({icon, contact} : {icon:string, contact: string}) => {
    return (
        <div className={styles.contact_wrap}>
            <div className={styles.icon_wrap}>
                <img src={icon} alt="contact icon" />
            </div>
            <span>{contact}</span>
        </div>
     );
}
 
export default MyContacts;