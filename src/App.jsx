import './App.css'
import FightersList from './components/FightersList';



const fighters = [
  {
    title: 'Conor McGregor',
    description: 'Striker',
  },
  {
    title: 'Alex Pereira',
    description: 'Kickboxer',
  },
  {
    title: 'Khamzat Chimaev',
    description: 'Wrestler',
  },
];

function App() {


  return (
    <div>
    <h1>My First Dynamic React Application</h1>
    <FightersList  headingText = 'Fighters List'/>
    </div>
  )
}

export default App
