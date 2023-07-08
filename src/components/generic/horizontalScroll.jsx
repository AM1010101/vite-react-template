import React from 'react';

const HorizontalScrollableList = ({ children }) => {
  const scrollableListStyle = {
    display: 'flex',
    overflowX: 'auto',
    padding: '10px',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  };

  const cardStyle = {
    marginRight: '10px',
  };

  return (
    <div style={scrollableListStyle}>
      {React.Children.map(children, (child, index) => (
        <div style={cardStyle}>{child}</div>
      ))}
    </div>
  );
};

export default HorizontalScrollableList;
