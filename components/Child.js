import React from 'react';

const Child = (props) => {
  return (
    <div>
      Child
      {console.log('child render here')}
      <button onClick={props.incrementCount}>increment count</button>
    </div>
  );
};

export default React.memo(Child);
