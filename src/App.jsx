import './App.css'
import FightersList from './components/FightersList';
import fighters  from './assets/fighters';
import Timer from './components/Timer';






function App() {


  return (
    <div className='background'>
    <h1>UFC Fighters Training Camp</h1>
    <Timer />
    <FightersList fighters={fighters}  headingText = 'Fighters List'/>
    </div>
  )
}

export default App
