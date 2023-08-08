import axios from "axios"
import { useEffect, useState } from "react"
// import dotenv from 'dotenv';
// dotenv.config();

const Random_v1 = () => {
    // const API_KEY = process.env.REACT_APP_API_KEY
    const [gif, setGif] = useState('')

    const fetchGit = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=RyAxtxINywEFexawHf6w2R2oML9xxmsS`;
        const { data } = await axios.get(url)
        console.log(data);
        const imageSrc = data.data.images.downsized_large.url
        setGif(imageSrc)
    }


    useEffect(() => {
        fetchGit()
    }, [])




    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img height='500' width='500' src={gif} alt="random_gif" />
            <button onClick={fetchGit}>Change Gif</button>
        </div>
    )
}

export default Random_v1