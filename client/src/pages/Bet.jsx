import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/loginGoogleSlice';

const Bet = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      try {
        const { userData, access_token } = JSON.parse(decodeURIComponent(hash));
        localStorage.setItem('access_token', access_token);
        dispatch(setUser(userData))
        window.location.hash = '';
      } catch (error) {
        console.error('Error parsing userData and access_token:', error);
      }
    }
  }, []);

  return (
    <div>
      SOY EL BET
    </div>
  );
};

export default Bet;