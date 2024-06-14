'use client'
import { Sidebarnavlinks } from "@/features/sidebarNavLinks";
import styles from './sidebar.module.css'
import { Sidebarmedialinks } from "@/features/sidebarMediaLinks";
import '../../../app/globals.css'
import { SidebarStore } from "../model/sidebarControl";

export default function Sidebar() {
  const isSidebarActive = SidebarStore((state)=> state.isActive)
  const setSidebar = SidebarStore((state)=> state.setSidebarActive)
  return (
    <>
      <div className={isSidebarActive ? styles.display_none : styles.sidebar_container}>
        <div className={styles.sidebar_content}>
          <div className={styles.logo_wrap}>
            <h1 className={styles.logo}>SA</h1>
            <button className={styles.burger_btn} onClick={()=> setSidebar()}>
              <img src="/menu.svg" alt="burger menu" />
            </button>
          </div>
          <div className={styles.navLinks_wrap}>
            <Sidebarnavlinks />
          </div>
          <Sidebarmedialinks />
          <footer className={styles.sidebar_footer}>
            <span>Copyright &copy;2024 Salikhov<br />Alisher. All rights reserved</span>
          </footer>
        </div>
      </div>
    </>
  )
}
