import styles from './LinkButton.module.css'
import '../../app/globals.css'

const LinkButton = ({label,isLoad,link}:{label:string,isLoad:boolean,link:string}) => {
    return ( 
        <a href={link} className={styles.button_link} download={isLoad}>
            <span>{label}</span>
            <img src="/linkArrow.png" alt="link arrow" />
        </a>
     );
}
 
export default LinkButton;