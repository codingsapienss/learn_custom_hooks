import useFetchGif from "../Hooks/useFetchGif"

const Random_v2 = () => {
    const { gif, fetchGif } = useFetchGif()

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img height='500' width='500' src={gif} alt="random_gif" />
            <button onClick={fetchGif}>Change Gif</button>
        </div>
    )
}

export default Random_v2