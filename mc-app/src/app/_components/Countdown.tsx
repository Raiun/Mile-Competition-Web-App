import { useEffect, useState } from "react"
import "./Countdown.css"

function getNextEveryOtherSunday() {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const daysUntilNextSunday = 7 - currentDate.getDay(); // Calculate days until the next Sunday
    const daysToAdd = daysUntilNextSunday + 14; // Add 14 days to get to the next every other Sunday
    const nextEveryOtherSunday = new Date(currentDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
    return nextEveryOtherSunday;
}

const Countdown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = getNextEveryOtherSunday();

    const getTime = (deadline: Date) => {
        const time = deadline.getTime() - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="countdown">
            <div className="countdownItem">
                {days}
            </div>
            <div className="countdownItem">
                {hours}
            </div>
            <div className="countdownItem">
                {minutes}
            </div>
            <div className="countdownItem">
                {seconds}
            </div>
            <div className="countdownLabel">
                Days
            </div>
            <div className="countdownLabel">
                Hours
            </div>
            <div className="countdownLabel">
                Mins
            </div>
            <div className="countdownLabel">
                Secs
            </div>
        </div>
    )
}

export default Countdown