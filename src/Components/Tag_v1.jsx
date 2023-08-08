
import axios from "axios"
import { useEffect, useState } from "react"
// import dotenv from 'dotenv';
// dotenv.config();

const Tag_v1 = () => {
    // const API_KEY = process.env.REACT_APP_API_KEY
    const [tag, setTag] = useState('cat')
    const [gif, setGif] = useState('')

    // const debounce = (cb, d) => {
    //     let timerID;
    //     return (...args) => {
    //         clearTimeout(timerID)
    //         timerID = setTimeout(() => {
    //             cb(...args)
    //         }, d)
    //     }
    // }

    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?  ${tag}&api_key=RyAxtxINywEFexawHf6w2R2oML9xxmsS`;
        const { data } = await axios.get(url)
        console.log(data);
        const imageSrc = data.data.images.downsized_medium.url
        setGif(imageSrc)
    }



    useEffect(() => {
        fetchGif(tag)
    }, [tag])


    const handleClick = () => {
        fetchGif(tag)
    }



    return (
        <div className="container">
            <h1>Random {tag} gif</h1>
            <img height='500' width='500' src={gif} alt="random_gif" />
            <input placeholder="Search gifs..." value={tag} onChange={(e) => setTag(e.target.value)} type="text" />

            <button onClick={handleClick}>Change Gif</button>
        </div>
    )
}

export default Tag_v1