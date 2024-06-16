export default function FightersList(props) {
    return (
        <div className="fighters-list">
            <h2>{props.headingText}</h2>
            <ul>
                <li>First Fighter</li>
                <li>Second Fighter</li>
                <li>Third Fighter</li>
            </ul>
        </div>
    );
}