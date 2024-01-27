import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/norule.json';

const NoRuleAnimation = () => {
  const style = {
    height: 500,
    width: 500,
  };
  return (
    <>
      <Lottie animationData={animationData} style={style} />
    </>
  );
};

export default NoRuleAnimation;
