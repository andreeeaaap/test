import GameBoard from "./gameboart";

function ShowWinner(props){

    return <>
        <div className="winner">Winner is: {props.winner}</div>
    </>
}

export default ShowWinner;