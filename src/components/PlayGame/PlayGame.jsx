import React from 'react'
import { useState } from 'react';
import {MdNotes } from 'react-icons/md'

import './playGame.css'
import { BiSolidUser } from 'react-icons/bi';
import { HiDesktopComputer } from 'react-icons/hi';
import { GiGoat, GiTigerHead } from 'react-icons/gi';

function PlayGame({ showRules, vsComp, vsPlayer }) {
    //  states
    const [goatPositions, setGoatPositions] = useState([]);
    const [tigerPosition, setTigerPosition] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState(null);
  





  const handleNewGame = () => {
    // Add logic to handle the "New Game" button click
    console.log('New Game button clicked');
  };

  // here player comes from clicking the button its value is passen onclick
  const handlePlayAs = (player) => {
    if (currentPlayer === 'goat') {
      // If the current player is a goat, add the node to the goat positions
      setGoatPositions((prevGoatPositions) => [...prevGoatPositions, node]);
    } else if (currentPlayer === 'tiger') {
      // If the current player is a tiger, set the tiger position
      setTigerPosition(node);
    }
    // Add logic to handle the player's choice of playing as goat or tiger
    console.log(`Player chose to play as ${player}`);
    setCurrentPlayer(player);

  };
  

  return (
    <>
      <div className="main-container">
        <MdNotes />
        <div className="player-choose">
          <div className="vsPlayer-2">
            <p>
              {' '}
              <BiSolidUser className='icons' /> VS Player-2{' '}
            </p>
          </div>
          <div className="vsComp">
            <p>
              {' '}
              <HiDesktopComputer className='icons' /> VS Computer{' '}
            </p>
            <div className='choose-TG'>
              <div className="PlayGoat" onClick={() => handlePlayAs('goat')}>
                <p>
                  {' '}
                  <GiGoat /> play goat{' '}
                </p>
              </div>
              <div className="PlayTiger" onClick={() => handlePlayAs('tiger')}>
                <p>
                  {' '}
                  <GiTigerHead /> play tiger{' '}
                </p>
              </div>
            </div>
          </div>
          <button className='NewGame' onClick={handleNewGame}>
            New Game
          </button>
        </div>
      </div>
    </>
  );
}

export default PlayGame;
