import { useEffect, useState } from "react"
import "./StatCard.css"

type StatCardProps = {
  name: string;
};

const StatCard = ({name}: StatCardProps) => {
    const cardName = name;
    const [stats, SetStats] = useState("");
    console.log({cardName})
    return(
        <div id = "statCard">
            <p>{cardName}</p>
        </div>
    )
}

export default StatCard