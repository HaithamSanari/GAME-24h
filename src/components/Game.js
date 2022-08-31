import React from 'react';
// Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetails } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import { popup } from '../animations';

const Game = ({ name, released, image, id }) => {
  const pathIdToString = id.toString();
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetails(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={pathIdToString}
      onClick={loadDetailsHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${pathIdToString}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${pathIdToString}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  text-align: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    height: 40vh;
    width: 100%;
    object-fit: cover;
    /* border-radius: 1rem; */
  }
`;

export default Game;
