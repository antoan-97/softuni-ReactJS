import FightersList from './components/FightersList';
import fighters  from './assets/fighters';







function App() {


  return (
    <div className='background'>
    <h1>UFC Fighters Training Camp</h1>

    <FightersList fighters={fighters}  headingText = 'Fighters List'/>
    </div>
  )
}

export default App
