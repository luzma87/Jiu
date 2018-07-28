import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withTheme } from '@material-ui/core/styles';

const classes = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingTop: 40,
  },
  gridList: {
    width: 400,
    height: 300,
  },
};

const images = [
  {
    img: '../assets/photos/1.png',
    cols: 1,
  },
  {
    img: '../assets/photos/2.png',
    cols: 1,
  },
  {
    img: '../assets/photos/3.png',
    cols: 1,
  },
  {
    img: '../assets/photos/4.png',
    cols: 1,
  },
];

function App() {
  return (
    <div style={classes.root}>
      <GridList
        cellHeight={160}
        style={classes.gridList}
        cols={2}
      >
        {images.map(tile => (
          <GridListTile
            key={tile.img}
            cols={tile.cols || 1}
          >
            <img src={tile.img} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

App.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(App);
