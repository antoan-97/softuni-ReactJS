import FightersList from './components/FightersList';
import fighters  from './assets/fighters';

import styles from './App.module.css';







function App() {


  return (
    <div className={styles.background}>
    <h1>UFC Fighters Training Camp</h1>

    <FightersList fighters={fighters}  headingText = 'Fighters List'/>
    </div>
  )
}

export default App
