'use client'

import Link from 'next/link'
import { navLinks } from '../model/navLinks'
import styles from './sidebarNavlinks.module.css'
import { usePathname } from 'next/navigation'

export default function Sidebarnavlinks() {

  let currentPath = usePathname()

  return (
    <div className={styles.navigation_wrap}>
      {navLinks.map((elem)=>{
        let isActive = currentPath === elem.path
        return <Link href={elem.path} className={isActive ? `${styles.link_item} ${styles.active_link}` : styles.link_item}>
          {elem.label}
        </Link>
      })}
    </div>
  )
}
