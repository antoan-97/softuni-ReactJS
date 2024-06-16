import Fighter from "./Fighter";


export default function FightersList(props) {
    return (
        <div className="fighters-list">
            <h2>{props.headingText}</h2>
            <ul>
                <li><Fighter data = {props.fighters[0]} /></li>
            </ul>
        </div>
    );
}