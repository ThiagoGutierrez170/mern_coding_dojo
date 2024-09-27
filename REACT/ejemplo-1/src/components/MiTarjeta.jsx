// MiTarjeta.jsx
import styles from './MiTarjeta.module.css';

const MiTarjeta = ({titulo,contenido}) => {
    return (
        <div className={styles.tarjeta}>
            <h2>{titulo}</h2>
            <p>{contenido}</p>
        </div>
    );
}

export default MiTarjeta;