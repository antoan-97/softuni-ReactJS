import Fighter from "./Fighter";
import fighters from "../assets/fighters";
import styles from '../styles/FightersList.module.css';



export default function FightersList(props) {
    return (
        <div className="fighters-list">
            <h2 className={props.headingClass}>{props.headingText}</h2>
            <ul className={styles.fighterList}>
                {fighters.map((fighter, index) =>(
                <li key={index} className={styles.fighterItem}>  
                <Fighter data={fighter} />
                </li>
                ))}

            </ul>
        </div>
    );
}