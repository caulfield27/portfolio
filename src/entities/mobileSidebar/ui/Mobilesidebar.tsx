'use client'
import { Sidebarnavlinks } from '@/features/sidebarNavLinks'
import styles from './mobileSidebar.module.css'
import { SidebarStore } from '@/widgets/sidebar/model/sidebarControl'
export default function Mobilesidebar() {
  const isActive = SidebarStore((state)=> state.isActive)
  const setSidebar = SidebarStore((state)=> state.setSidebarActive)

  return (

    <div className={isActive ? styles.mobileSidebar_container : styles.display_none}>
      <div className={styles.mobileSidebar_content}>
        <div className={styles.mobileSidebar_logo_wrap}>
          <h1 className={styles.mobile_logo}>SA</h1>
        </div>
        <Sidebarnavlinks />

      </div>
      <button className={styles.sidebarClose_btn} onClick={()=> setSidebar()}>&#10006;</button>
    </div>
  )
}
