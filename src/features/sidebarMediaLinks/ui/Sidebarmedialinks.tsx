import styles from './sidebarMediaLinks.module.css'
import { links } from '../model/sidebarLinks'
import SofialMedia from '@/shared/socialMeida/SocialMedia'

export default function Sidebarmedialinks() {
  return (
    <div className={styles.sidebarSocialMedia_wrap}>
      {links.map((elem)=>{
        return <SofialMedia icon={elem.icon} path={elem.path}/>
      })}
    </div>
  )
}
