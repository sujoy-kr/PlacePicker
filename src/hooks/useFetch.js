import { useEffect, useState } from 'react'

export function useFetch(fetchFn, initialValue) {
    const [fetchedData, setFetchedData] = useState(initialValue)
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true)
            try {
                const places = await fetchFn()
                setFetchedData(places)
            } catch (error) {
                setError({
                    message: error.message || 'Failed to fetch user places.',
                })
            }

            setIsFetching(false)
        }

        fetchPlaces()
    }, [fetchFn])

    return { fetchedData, isFetching, error, setFetchedData }
}
