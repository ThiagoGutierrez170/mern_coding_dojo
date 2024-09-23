// MiTarjeta.jsx
import styles from './MiTarjeta.module.css';

const MiTarjeta = (props) => {
    return (
        <div className={styles.tarjeta}>
            <h2>Título de la Tarjeta</h2>
            <p>Este es el contenido de la tarjeta.</p>
        </div>
    );
}

export default MiTarjeta;