import { useEffect, useState } from "react"


export interface Response {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

interface Control {
    data: Response | null,
    loading: boolean,
    error: string | null
}


const useFetch = (url: string) => {

    const [state, setstate] = useState<Control>({
        data: null,
        loading: true,
        error: null
    })


    const getInformation = async () => {
        try {
            const resp = await fetch(url)
            const data: Response = await resp.json()
            setstate({
                ...state,
                data,
                loading: false
            })
        } catch (error) {
            setstate({
                ...state,
                error: 'Existe un Error en lla API'
            })
        }
    }

    useEffect(() => {
        getInformation()
    }, [url])



    return {
        ...state,
    }
}

export default useFetch
