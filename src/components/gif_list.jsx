import React from 'react';

import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      { props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};

// Destructuring
// const GifList = ({ gifs, selectGif }) => {
//   return (
//     <div className="gif-list">
//       { gifs.map({ id } => <Gif id={id} key={id} selectGif={selectGif} />)}
//     </div>
//   );
// };

export default GifList;
