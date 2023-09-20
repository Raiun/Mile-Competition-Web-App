import "./VoteButton.css";

function vote() {
    /*Submit data to db*/
    console.log("Clicked")
}

const VoteButton = () => {
    return(
        <div>
            <button onClick={vote} className="voteButton">
                VOTE
            </button>
        </div>
    )
}

export default VoteButton