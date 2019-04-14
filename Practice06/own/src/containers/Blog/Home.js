import React from 'react';
import Post from '../../components/Post/Post';

export default () => {
  return <div>
    { [...Array(3).keys()].map(e => <Post id={e.toString()} />) }
  </div>
};
