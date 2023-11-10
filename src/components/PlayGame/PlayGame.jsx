import React from 'react'
import {MdNotes } from 'react-icons/md'
import {BiSolidUser } from 'react-icons/bi'
import {HiDesktopComputer} from 'react-icons/hi'
import {GiGoat} from 'react-icons/gi'
import {GiTigerHead} from 'react-icons/gi'
import './playGame.css'


function PlayGame({showRules, vsComp, vsPlayer}) {
  return (

    <>


<div className="main-container">


    <MdNotes />
    <div   className="player-choose">
  
      <div className="vsPlayer-2">
    <p> <BiSolidUser className='icons'/> VS Player-2 </p>
      </div>
      <div className="vsComp">
        <p> <HiDesktopComputer className='icons'/> VS Computer </p>
        <div className='choose-TG'>
        <div className="PlayGoat"><p> <GiGoat /> play goat </p></div>
        <div className="PlayTiger"><p> <GiTigerHead /> play tiger </p></div>
        </div>
        
      </div>

      <button className='NewGame'>New Game</button>

  
       </div>

</div>





    </>
   
  )
}

export default PlayGame;

