import React from 'react';

const colors = WrappedComponent => {
  const colours = [
    'darkslategray',
    'blueviolet',
    'indigo',
    'midnightblue',
    'lightseagreen',
    'aqua',
    'mediumseagreen',
    'darkred'
  ];
  const randomColour = colours[Math.floor(Math.random() * 8)] + '-text';

  return props => (
    <div className={className}>
      <WrappedComponent randColor={randColor} {...props} />
    </div>
  );
};

export default colors;
