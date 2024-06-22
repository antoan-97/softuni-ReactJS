import FightersList from './components/FightersList';
import fighters  from './assets/fighters';
import Navbar from './components/Navbar';

import styles from './styles/App.module.css';







function App() {


  return (
    <div className={styles.background}>
     <Navbar />
    <h1 className={styles.heading}>UFC Fighters Training Camp</h1>

    <FightersList fighters={fighters}  headingText = 'Fighters List' headingClass={styles.heading}/>
    </div>
  )
}

export default App
