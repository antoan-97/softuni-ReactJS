import Counter from "./Counter";

export default function Fighter(props) {
    return(
        <article>
            <h3>{props.data.title}</h3>
            <p>Years: {props.data.years}</p>
            <p>Wins: {props.data.wins}</p>
            <Counter />
        </article>
    );
}