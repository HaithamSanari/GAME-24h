import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// Components
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';
// Style and Animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { fadeIn } from '../animations';

const Home = () => {
  const location = useLocation();
  const pathID = location.pathname.split('/')[2];

  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {pathID && <GameDetails pathID={pathID} />}
        </AnimatePresence>
        {searched.length ? (
          <div className='searched'>
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ''
        )}
        <h2>Upcoming Game</h2>
        <Games>
          {upcoming.map((data) => (
            <Game
              name={data.name}
              released={data.released}
              image={data.background_image}
              id={data.id}
              key={data.id}
            />
          ))}
        </Games>
        <h2>Popular Game</h2>
        <Games>
          {popular.map((data) => (
            <Game
              name={data.name}
              released={data.released}
              image={data.background_image}
              id={data.id}
              key={data.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((data) => (
            <Game
              name={data.name}
              released={data.released}
              image={data.background_image}
              id={data.id}
              key={data.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 2rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem 5rem;
`;

export default Home;
