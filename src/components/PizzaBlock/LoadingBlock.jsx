import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
  return (
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={465}
      viewBox='0 0 280 465'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <circle cx='128' cy='130' r='120' />
      <rect x='0' y='308' rx='7' ry='7' width='280' height='85' />
      <rect x='0' y='416' rx='7' ry='7' width='91' height='31' />
      <rect x='0' y='268' rx='7' ry='7' width='280' height='23' />
      <rect x='125' y='411' rx='18' ry='18' width='153' height='45' />
    </ContentLoader>
  );
};

export default LoadingBlock;
