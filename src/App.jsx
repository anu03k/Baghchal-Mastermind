
import './App.css'
import Theme from './components/Themes/Theme';
import Header from './components/Header/Header';
import PlayGame from './components/PlayGame/PlayGame';

import Board from './components/Header/Board/Board'
function App() {

 

  return (
    <>
    <Header />
    <div className="Main">
    <div className="boardBox">
      {/* theme selection */}
    
    <Board />

    </div> 
    {/* boardbox div end */}

    
    <Theme />
    
    <div className="playing">
      <PlayGame />
    </div>

    </div> 
    {/* main */}
    

   
  

    
     
      {/* <Canvas /> */}
    </>
  )
}

export default App;


