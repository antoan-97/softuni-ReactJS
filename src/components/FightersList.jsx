export default function FightersList(props) {
    return (
        <div className="fighters-list">
            <h2>{props.headingText}</h2>
            <ul>
                <li>{props.fighters[0].title}</li>
                <li>{props.fighters[1].title}</li>
                <li>{props.fighters[2].title}</li>
            </ul>
        </div>
    );
}