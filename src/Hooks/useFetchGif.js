import axios from "axios"
import { useEffect, useState } from "react"

const url = `https://api.giphy.com/v1/gifs/random?api_key=RyAxtxINywEFexawHf6w2R2oML9xxmsS`

const useFetchGif = (tag) => {


    const [gif, setGif] = useState('')

    const fetchGif = async (tag) => {
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url)
        const imgSrc = data.data.images.downsized_large.url
        setGif(imgSrc)
        // console.log(tag);
        // console.log(imgSrc);
    }

    useEffect(() => {
        fetchGif(tag)
    }, [tag])

    return { gif, fetchGif }
}

export default useFetchGif