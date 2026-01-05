import { useEffect } from 'react'
import Timer from './Timer'

export default function DeleteConfirmation({ onConfirm, onCancel }) {
    const timeout = 3000

    useEffect(() => {
        const timer = setTimeout(() => {
            onConfirm()
        }, timeout)
        return () => {
            clearTimeout(timer)
        }
    }, [onConfirm])
    return (
        <div id='delete-confirmation'>
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <div id='confirmation-actions'>
                <button onClick={onCancel} className='button-text'>
                    No
                </button>
                <button onClick={onConfirm} className='button'>
                    Yes
                </button>
            </div>
            <Timer timeout={timeout} />
        </div>
    )
}
