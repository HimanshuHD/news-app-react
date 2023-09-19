import React from 'react';
// import '../../assets/images/old-newspaper-bg.jpg';

import './styles/Loading.css';

const Loading = () => {
  return (
    <div>
      <div className="loading-bg-container">
      </div>
      <div className="loading-main-content">
        <div className='loading-animation'>
          <span className="loader"></span>
        </div>
        <div className="waviy-loading-text">
          <span style={{'--i':1}}>L</span>
          <span style={{'--i':2}}>O</span>
          <span style={{'--i':3}}>A</span>
          <span style={{'--i':4}}>D</span>
          <span style={{'--i':5}}>I</span>
          <span style={{'--i':6}}>N</span>
          <span style={{'--i':7}}>G</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;