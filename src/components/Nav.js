import React, { useState } from 'react';
//Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
//Redux and Routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animations';

const Nav = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(input));
    setInput('');
  };

  const clearSearch = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo onClick={clearSearch}>
        <img src={logo} alt='logo' />
        <h1>GAME 24h</h1>
      </StyledLogo>
      <form className='search'>
        <input value={input} onChange={inputHandler} type='text' />
        <button onClick={submitSearch} type='submit'>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;
const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
