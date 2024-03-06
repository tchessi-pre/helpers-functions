import React, { useState, useEffect, useRef } from 'react';

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, isHovered];
};

// Exemple d'utilisation :
const Component = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef}>
      {isHovered ? 'Hovered!' : 'Not hovered.'}
    </div>
  );
};

export default Component;
