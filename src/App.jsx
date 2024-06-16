import './App.css'
import FightersList from './components/FightersList';
import Figters  from './assets/fighters'



function App() {


  return (
    <div>
    <h1>My First Dynamic React Application</h1>
    <FightersList  headingText = 'Fighters List'/>
    </div>
  )
}

export default App
