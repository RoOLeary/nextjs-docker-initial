import styles from '../../styles/Loader.module.css';
import { PuffLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <PuffLoader
                color="#fff"
                speedMultiplier={2}
                size={60}
            />
        </div>
     );
}

export default Loader;