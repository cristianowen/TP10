import React, { useEffect, useState } from 'react';

const Titulo = () => {
    const text = 'Proyectos de Kevin J.S';
    const [displayText, setDisplayText] = useState('');
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
    useEffect(() => {
      const delay = 100;
      let currentIndex = 0;
  
      const interval = setInterval(() => {
        setDisplayText((prevText) => {
          if (currentIndex < text.length) {
            return prevText + text[currentIndex];
          } else {
            clearInterval(interval);
            setIsAnimationComplete(true);
            return prevText;
          }
        });
        currentIndex++;
      }, delay);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className='margenTopInicial'>
    <h1>Mi Portfolio</h1>
    </div>
  );
}

export default Titulo;