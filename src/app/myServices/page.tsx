import { ServicesAccordion } from "@/widgets/ServicesAccordion";
import styles from './services.module.css'

const Services = () => {
    return (
        <div className={styles.services_container}>
            <div className={styles.services_header}>
                <span>Service</span>
                <h1>MY SPECIALTIES</h1>
            </div>
            <ServicesAccordion/>
        </div>

    );
}

export default Services;