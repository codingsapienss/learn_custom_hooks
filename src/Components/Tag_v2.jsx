import { useState } from "react"
import useFetchGif from "../Hooks/useFetchGif"

const Tag_v2 = () => {
    const [tag, setTag] = useState('frog')
    const { gif, fetchGif } = useFetchGif(tag)

    return (
        <div className="container">
            <h1>Random {tag} gif</h1>
            <img height='500' width='500' src={gif} alt="random_gif" />
            <input placeholder="Search gifs..." value={tag} onChange={(e) => setTag(e.target.value)} type="text" />

            <button onClick={() => { fetchGif(tag) }}>Change Gif</button>
        </div>
    )
}

export default Tag_v2