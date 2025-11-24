import styles from './Card.module.css'
import Tilt from 'react-parallax-tilt';

export const Card = (props) => {
    return(
        <Tilt>
            <div className={styles.card}>
                <img src={props.image} alt={props.texto} />
                <h3>{props.sessao}</h3>
                <p>{props.text}</p>
            </div>
        </Tilt>
    )
}