import DisplayOpponents from "./components/DisplayOpponents";
import circuitsList from "./data/circuits.json";


function Game() {
    return (
        <div>
            <h1>Clubbage!!</h1>
            <ol>
                {
                circuitsList.map((el) => (
                    <DisplayOpponents circuit={el} />
                ))
                }
            </ol>
        </div>
    );
}

export default Game;
