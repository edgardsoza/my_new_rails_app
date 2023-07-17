import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGreeting } from '../redux/actions';

const Greeting = () => {
    const dispatch = useDispatch();
    const greeting = useSelector(state => state.greeting);
  
    useEffect(() => {
      fetch('/greetings/random')
        .then(response => response.json())
        .then(data => {
          dispatch(setGreeting(data.greeting));
        });
    }, [dispatch]);
  
    return (
      <div>
        <h1>{greeting}</h1>
      </div>
    );
  };
  