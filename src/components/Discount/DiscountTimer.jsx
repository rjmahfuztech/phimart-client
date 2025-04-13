import React, { useEffect, useState } from "react";

const DiscountTimer = () => {
  const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 25; // set 25 days countdown

  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="flex gap-4 my-7 justify-center md:justify-start text-2xl md:text-3xl xl:text-5xl">
      <div>
        <h3 className="-mb-2">{timeLeft.days} :</h3>
        <span className="text-lg font-normal">Days</span>
      </div>
      <div>
        <h3 className="-mb-2">{timeLeft.hours} :</h3>
        <span className="text-lg font-normal">Hrs</span>
      </div>
      <div>
        <h3 className="-mb-2">{timeLeft.minutes} :</h3>
        <span className="text-lg font-normal">Min</span>
      </div>
      <div>
        <h3 className="-mb-2">{timeLeft.seconds}</h3>
        <span className="text-lg font-normal">Sec</span>
      </div>
    </div>
  );
};

export default DiscountTimer;
