/** @format */
"use client";
import React from "react";
import Lottie from "lottie-react";
import animateLoading from "./_assests/animateLoadingScreen.json";
const LoadingScreenDashboard = () => {
  return (
    <>
      <Lottie
        animationData={animateLoading}
        loop={true}
        autoPlay={true}
        size={300}
        height={500}
      />
    </>
  );
};

export default LoadingScreenDashboard;
