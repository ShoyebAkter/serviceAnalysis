import React from 'react';
import CustomReview from '../CustomReview/CustomReview';
import './Home.css';

const Home = () => {
    return (
      <div className="mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <div className="p-5 lg:mt-10">
            <h1 className="text-3xl font-bold px-10">Football Store</h1>
            <h1 className="text-3xl pt-5 px-10 font-bold text-lime-600">
              Best Football of the world cup
            </h1>
            <p className="flex justify-center text-justify px-10 pt-5">
            football, also called association football or soccer, game in which
             two teams of 11 players, using any part of their bodies except their hands and arms,
              try to maneuver the ball into the opposing team’s goal. Only the goalkeeper is permitted to handle
             the ball and may do so only within the penalty area surrounding the goal.
              The team that scores more goals wins.
            </p>
            
          </div>
          <div>
            <img
              className="mx-10 img-size"
              src="https://hirakraja.com/2571-large_default/2018-world-cup-football.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <CustomReview />
        </div>
      </div>
    );
};

export default Home;