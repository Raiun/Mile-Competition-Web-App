import Image from "next/image"
import { useEffect, useState } from "react"
import "./StatCard.css"
import VoteButton from "./VoteButton";

type StatCardProps = {
  name: string;
};

// Need to get stats from db
class Person {
    public name;
    public stats;

    constructor(name: string, stats: {key: string}) {
        this.name = name;
        this.stats = stats;
    }
}

interface PersonStats {
    name: string,
    bestTime: string,
    averageTime: string,
    lastWeekTime: string
}


const defaultPerson: PersonStats = {
    name: "",
    bestTime: "",
    averageTime: "",
    lastWeekTime: ""
}

const person1: PersonStats = {
    name: "Person 1",
    bestTime: "5:20",
    averageTime: "6:20",
    lastWeekTime: "7:00"
}

const person2: PersonStats = {
    name: "Person 2",
    bestTime: "5:19",
    averageTime: "6:20",
    lastWeekTime: "7:00"
}

const StatCard = ({name}: StatCardProps) => {
    const cardName = name;
    const [stats, setStats] = useState<PersonStats>(defaultPerson);
    const [displayOption, setDisplayOption] = useState(1);
    const [votes, setVotes] = useState(0);

    useEffect(() => {
        if (cardName === "Person 1") {
            setStats(person1);
        }
        else {
            setStats(person2)
        }
    }, [cardName]);

    const flipCard = () => {
        if (displayOption == 0) {
            setDisplayOption(1);
        }
        else {
            setDisplayOption(0);
        }
    }

    const handleVoteClick = () => {
        setVotes(votes + 1); // Toggle the state on click
    };

    return(
        <div className="statCard">
            {displayOption === 0 ? (
                <div onClick={flipCard}>
                    <p>PULL FROM DB TO CREATE GRAPH</p>
                </div>
            ) : (
                <div>
                    <div onClick={flipCard}>
                        <Image
                            className="profilePic"
                            src="/TempProf.png"
                            alt="Profile Pic"
                            width={110}
                            height={110}
                        />
                        <p>Name: {stats.name}</p>
                        <p>Best Mile Time: {stats.bestTime}</p>
                        <p>Average Mile Time: {stats.averageTime}</p>
                        <p>Last Week Mile Time: {stats.lastWeekTime}</p>
                    </div>
                    <div onClick={handleVoteClick} className="buttonContainer">
                        <VoteButton></VoteButton>
                    </div>
                    <div>
                        <p>Votes: {votes}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default StatCard