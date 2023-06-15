import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';

const BiggerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVars: Variants = {
  hover: { rotateZ: '90deg', scale: 1.5 },
  click: { borderRadius: '100px', scale: 1 },
  drag: { backgroundColor: 'rgb(46,204,113)', transition: { duration: 2 } },
};

export default function Gestures() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <BiggerBox ref={biggerBoxRef}>
      <Box
        drag
        dragSnapToOrigin
        dragElastic={1}
        dragConstraints={biggerBoxRef}
        variants={boxVars}
        whileHover='hover'
        whileTap='click'
        whileDrag='drag'
      ></Box>
    </BiggerBox>
  );
}
