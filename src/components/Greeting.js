import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../actions/greetingActions';

function Greeting({ greeting, fetchRandomGreeting }) {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomGreeting: () => dispatch(fetchRandomGreeting()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
