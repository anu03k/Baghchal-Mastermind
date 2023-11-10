
import './App.css'
import Header from './components/Header/Header';
import PlayGame from './components/PlayGame/PlayGame';

import Board from './components/Header/Board/Board'
function App() {

 

  return (
    <>
    <Header />
    <div className="Main">
    <div className="boardBox">
    <Board />

    </div>
    <div className="playing">
      <PlayGame />
    </div>

    </div>
    

   
  

    
     
      {/* <Canvas /> */}
    </>
  )
}

export default App;


