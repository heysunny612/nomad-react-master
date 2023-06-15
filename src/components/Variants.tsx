import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVars: Variants = {
  start: { opacity: 0, scale: 0, y: -80 },
  end: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVars: Variants = {
  start: {
    opacity: 0,
    y: -80,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

export default function Variants() {
  return (
    <Box variants={boxVars} initial='start' animate='end'>
      <Circle variants={circleVars} />
      <Circle variants={circleVars} />
      <Circle variants={circleVars} />
      <Circle variants={circleVars} />
    </Box>
  );
}
