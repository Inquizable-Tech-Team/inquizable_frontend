import { useEffect, useState } from "react";

const useTyping = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const startTyping = () => {
    setIsKeyPressed(true);
    setCountdown(5);
    setIsTyping(true);
  };

  const stopTyping = () => {
    setIsKeyPressed(false);
  };

  const cancelTyping = () => {
    setCountdown(0);
  };

  useEffect(() => {
    let interval;
    console.log('before If Statement', interval)
    if (!isKeyPressed) {
      
      interval = setInterval(() => {
        setCountdown((c) => c - 1);
      }, 1000);
      console.log('inside if statement', interval)
    } else if (isKeyPressed || countdown === 0) {
      console.log('inside else if statement', interval)
      clearInterval(interval);
    }

    if (countdown === 0) {
      console.log('countdown')
      setIsTyping(false);
    }

    return () => clearInterval(interval);
  }, [isKeyPressed, countdown]);

  return { isTyping, startTyping, stopTyping, cancelTyping };
};

export default useTyping;