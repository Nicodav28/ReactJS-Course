import { useCallback, useEffect, useState } from "react";

const useFetch = (uri) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback( async () => {
        setLoading(true);
        try {
            const res = await fetch(uri);
            if (!res.ok) throw new Error("Hubo un error trayendo los datos.");
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setData([]);
        } finally {
            setLoading(false);
        }
    }, [uri]);

    useEffect(() => {
        console.log("Entra useEffect");
        fetchData();
    }, [fetchData]);

    return { data, loading, error }
}

export { useFetch };