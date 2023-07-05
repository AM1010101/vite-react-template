import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent } from '@mui/material';

const useStyles = makeStyles(() => ({
  scrollableList: {
    display: 'flex',
    overflowX: 'auto',
    padding: '10px',
  },
  card: {
    minWidth: 150,
    marginRight: 10,
  },
}));

const HorizontalScrollableList = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.scrollableList}>
      {React.Children.map(children, (child, index) => (
        <CardContent>{child}</CardContent>
      ))}
    </div>
  );
};

export default HorizontalScrollableList;
