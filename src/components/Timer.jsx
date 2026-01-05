import { useEffect, useState } from 'react'

const Timer = ({ timeout }) => {
    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 10)
        }, 10)

        return () => {
            clearInterval(interval)
        }
    }, [])
    return <progress value={remainingTime} max={timeout} />
}

export default Timer
