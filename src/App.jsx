import './App.css'
// import Random_v1 from './Components/Random_v1'
import Random_v2 from './Components/Random_v2'

// import Tag_v1 from './Components/Tag_v1'
import Tag_v2 from './Components/Tag_v2'

const App = () => {
  return (
    <div>
      <h1>Random GIF application</h1>
      <div className="main-container">
        <Random_v2 />
        <Tag_v2 />
      </div>
    </div>
  )
}

export default App