export const fetchRandomGreeting = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('http://localhost:3000/random-greeting');
        const data = await response.json();
        dispatch(setRandomGreeting(data.greeting));
      } catch (error) {
        console.log('Error fetching random greeting:', error);
      }
    };
  };
  
  export const setRandomGreeting = (greeting) => {
    return {
      type: 'SET_RANDOM_GREETING',
      payload: greeting,
    };
  };
  