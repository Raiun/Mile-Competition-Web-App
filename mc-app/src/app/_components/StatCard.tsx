import { useEffect, useState } from "react"
import "./StatCard.css"

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
    lastWeekTime: string
}


const defaultPerson: PersonStats = {
    name: "",
    bestTime: "",
    lastWeekTime: ""
}

const person1: PersonStats = {
    name: "Person 1",
    bestTime: "5:20",
    lastWeekTime: "7:00"
}

const person2: PersonStats = {
    name: "Person 2",
    bestTime: "5:19",
    lastWeekTime: "7:00"
}

const StatCard = ({name}: StatCardProps) => {
    const cardName = name;
    const [stats, setStats] = useState<PersonStats>(defaultPerson);
    console.log({cardName})

    useEffect(() => {
        if (cardName === "Person 1") {
            setStats(person1);
        }
        else {
            setStats(person2)
        }
    }, [cardName]);

    return(
        <div id = "statCard">
            <p>Name: {stats.name}</p>
            <p>Best Mile Time: {stats.bestTime}</p>
            <p>Last Week Mile Time: {stats.lastWeekTime}</p>
        </div>
    )
}

export default StatCard