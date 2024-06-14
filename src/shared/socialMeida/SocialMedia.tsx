import styles from './socialMedia.module.css'
const SofialMedia = ({ icon, path }: { icon: string, path: string }) => {
    return (
        <div className={styles.media_wrap}>
            <a href={path} target='_blank' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={icon} alt="social media icon" width={26}/>
            </a>

        </div>
    );
}

export default SofialMedia;