import React from 'react';
import Lottie from 'lottie-react';
import triCubeLoaer from './assets/tri-cube-loader.json';
import './spinner.css';

const Spinner = () => {
  return (
    <div className='container-spinner' data-testid='spinner-id'>
      <Lottie animationData={triCubeLoaer} loop={true} className={'spinner'} />
    </div>
  );
};

export default Spinner;
