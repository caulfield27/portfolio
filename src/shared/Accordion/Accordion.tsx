'use client'
import '../../app/globals.css'
import { ReactNode } from 'react'
import styles from './accordion.module.css'

interface Props{
    children: ReactNode,
    handleClick: ()=> void
    
}

const Accordion = ({children,handleClick} : Props)=>{
    return (
        <ul className={styles.accordion_container} onClick={handleClick}> 
            {children}
        </ul>
    )
}

const AccordionTitle = ({title, isActive} : {title: string, isActive: boolean})=>{
    return (
        <li className={isActive ? `${styles.title_wrap} ${styles.activeMarker}` : styles.title_wrap}>
            <h2 className={isActive ? styles.activeTitle : styles.title}>{title}</h2>
        </li>
    )
} 

const AccordionContent = ({children, img, isActive} : 
    {children: ReactNode, img: string,isActive: boolean})=>{

    return (
        <div className={styles.content_wrap}>
            <div className={styles.text_img}>
                <img src={img} alt="" className={isActive ? styles.active : styles.content_img}/>
                {children}
            </div>
            <div className={styles.plus_mark}>
                <div className={styles.x}></div>
                <div className={isActive ? styles.activePlus : styles.y}></div>
            </div>
        </div>
    )
}


Accordion.Title = AccordionTitle
Accordion.Content = AccordionContent
export default Accordion